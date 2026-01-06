-- Initialize databases for prepack project
-- This script runs on first container start

-- Create n8n database (CMS database is created via POSTGRES_DB env var)
CREATE DATABASE prepack_n8n_prod;

-- Grant privileges to production user
GRANT ALL PRIVILEGES ON DATABASE prepack_n8n_prod TO prepack_prod;
