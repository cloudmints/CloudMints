# CloudMints API Documentation

## Overview

The CloudMints API provides RESTful access to all cloud infrastructure services. All API requests require authentication using API keys.

## Base URL

```
https://api.cloudmints.in/v1
```

## Authentication

Include your API key in the Authorization header:

```bash
Authorization: Bearer YOUR_API_KEY
```

## Endpoints

### Compute Instances

#### List Instances

```http
GET /instances
```

**Response:**
```json
{
  "instances": [
    {
      "id": "i-1234567890abcdef",
      "name": "web-server-01",
      "type": "t3.medium",
      "status": "running",
      "ip_address": "54.123.45.67",
      "region": "us-east-1",
      "created_at": "2024-11-29T10:00:00Z"
    }
  ]
}
```

#### Create Instance

```http
POST /instances
```

**Request Body:**
```json
{
  "name": "web-server-01",
  "type": "t3.medium",
  "region": "us-east-1",
  "image": "ubuntu-20.04",
  "ssh_key": "your-ssh-key-name"
}
```

### Storage

#### List Buckets

```http
GET /storage/buckets
```

#### Upload File

```http
POST /storage/buckets/{bucket}/files
Content-Type: multipart/form-data
```

### Databases

#### Create Database

```http
POST /databases
```

**Request Body:**
```json
{
  "name": "my-database",
  "engine": "mysql",
  "version": "8.0",
  "instance_type": "db.t3.medium",
  "storage_gb": 100
}
```

## Rate Limits

- **Standard Plan:** 1,000 requests/hour
- **Pro Plan:** 10,000 requests/hour
- **Enterprise:** Unlimited

## Error Codes

| Code | Description |
|------|-------------|
| 200 | Success |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 429 | Rate Limit Exceeded |
| 500 | Internal Server Error |

## Support

For API support: api-support@cloudmints.in
