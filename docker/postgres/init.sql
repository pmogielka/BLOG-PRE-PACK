-- Initialize databases for prepack project
-- This script runs on first container start

-- Create n8n database (CMS database is created via POSTGRES_DB env var)
CREATE DATABASE prepack_n8n;

-- Grant privileges to default user
GRANT ALL PRIVILEGES ON DATABASE prepack_n8n TO prepack;
