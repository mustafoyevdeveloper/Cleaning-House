# House Clean Backend

## Environment Variables

Create a `.env` file in the backend directory with the following variables:

```env
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/house-clean

# Server Configuration
PORT=5000
NODE_ENV=production

# Email Configuration (Gmail)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Admin Email Configuration
ADMIN_EMAIL_TO=admin@example.com
ADMIN_EMAIL_FROM=admin@example.com

# CORS Configuration
CORS_ORIGIN=http://localhost:3000
```

## Render.com Deployment

For Render.com deployment, add these environment variables in your dashboard:

1. **MONGODB_URI**: Your MongoDB connection string
2. **SMTP_HOST**: smtp.gmail.com
3. **SMTP_PORT**: 587
4. **SMTP_USER**: Your Gmail address
5. **SMTP_PASS**: Your Gmail app password
6. **ADMIN_EMAIL_TO**: Admin email to receive messages
7. **ADMIN_EMAIL_FROM**: Admin email for sending messages
8. **CORS_ORIGIN**: Your frontend URL

## Build Script

The `build` script is added for Render.com compatibility but is not required for Node.js backend.

## Available Scripts

- `npm start`: Start production server
- `npm run dev`: Start development server with nodemon
- `npm run build`: Echo message (for Render.com)
