#!/bin/bash
set -e

echo "=========================================="
echo "  Starting Blog Pre-Pack Local Stack"
echo "=========================================="
echo ""

# Check if .env exists, create from example if not
if [ ! -f .env ]; then
    echo "Creating .env from .env.local.example..."
    cp .env.local.example .env
    echo "Done! You can edit .env to customize settings."
    echo ""
fi

# Check for local domain entries in /etc/hosts
HOSTS_ENTRIES="blog-pre-pack.localhost cms.blog-pre-pack.localhost n8n.blog-pre-pack.localhost"
MISSING_HOSTS=false

for host in $HOSTS_ENTRIES; do
    if ! grep -q "$host" /etc/hosts 2>/dev/null; then
        MISSING_HOSTS=true
        break
    fi
done

if [ "$MISSING_HOSTS" = true ]; then
    echo "Local domains not found in /etc/hosts."
    echo "Add the following line to /etc/hosts (requires sudo):"
    echo ""
    echo "  127.0.0.1 blog-pre-pack.localhost cms.blog-pre-pack.localhost n8n.blog-pre-pack.localhost"
    echo ""
    read -p "Do you want to add them now? (y/N) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "127.0.0.1 blog-pre-pack.localhost cms.blog-pre-pack.localhost n8n.blog-pre-pack.localhost" | sudo tee -a /etc/hosts
        echo "Hosts added successfully!"
    fi
    echo ""
fi

# Start services
echo "Building and starting Docker containers..."
docker compose -f docker-compose.local.yml up -d --build

echo ""
echo "=========================================="
echo "  Blog Pre-Pack Stack is Running!"
echo "=========================================="
echo ""
echo "Services (via Traefik):"
echo "  Web:      http://blog-pre-pack.localhost"
echo "  CMS:      http://cms.blog-pre-pack.localhost/admin"
echo "  n8n:      http://n8n.blog-pre-pack.localhost"
echo ""
echo "Direct port access:"
echo "  Web:      http://localhost:3012"
echo "  CMS:      http://localhost:3013/admin"
echo "  n8n:      http://localhost:5684"
echo "  Traefik:  http://localhost:8080 (dashboard)"
echo ""
echo "Database access:"
echo "  PostgreSQL: localhost:5438 (user: prepack)"
echo "  Redis:      localhost:6385"
echo ""
echo "Commands:"
echo "  View logs:  docker compose -f docker-compose.local.yml logs -f"
echo "  Stop:       ./local-down.sh"
echo ""
