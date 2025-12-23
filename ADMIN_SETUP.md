# Admin Panel Setup Guide

## Step 1: Create First Admin User

You need to create your first admin user before you can log in.

### Using API Tool (Postman or cURL)

Send a POST request to create an admin:

```bash
# Using PowerShell
Invoke-RestMethod -Uri "http://localhost:5000/api/admin/register" -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"email":"YOUR_EMAIL","password":"YOUR_SECURE_PASSWORD"}'
```

Or using cURL:

```bash
curl -X POST http://localhost:5000/api/admin/register \
  -H "Content-Type: application/json" \
  -d '{"email":"YOUR_EMAIL","password":"YOUR_SECURE_PASSWORD"}'
```

## Step 2: Login to Admin Panel

1. Navigate to: http://localhost:5173/admin/login
2. Enter the credentials you created in Step 1

## Step 3: Start Managing

After login, you'll have access to:

- **Dashboard**: Overview of your content
- **Products**: Add/Edit/Delete products
- **Subscribers**: View newsletter emails
- **Page Content**: Edit homepage content dynamically

## Important Notes

- JWT tokens are stored in localStorage
- Protected routes will redirect to login if not authenticated
- Products with `isFeatured=true` will show on the Home page
- **⚠️ SECURITY**: Never commit actual passwords or credentials to GitHub
