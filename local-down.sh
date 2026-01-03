#!/bin/bash

echo "=========================================="
echo "  Stopping Blog Pre-Pack Local Stack"
echo "=========================================="
echo ""

docker compose -f docker-compose.local.yml down

echo ""
echo "Stack stopped successfully."
echo ""
echo "To remove volumes (WARNING: DATA LOSS):"
echo "  docker compose -f docker-compose.local.yml down -v"
echo ""
echo "To restart:"
echo "  ./local-up.sh"
echo ""
