# House Clean - Professional Cleaning Services

A full-stack web application for managing house cleaning services with admin panel and customer contact system.

## 🚀 Features

- **Admin Panel**: Manage services, site settings, and customer messages
- **Service Management**: CRUD operations for residential and commercial cleaning services
- **Real-time Messaging**: Customer contact form with admin notification
- **Dynamic Content**: Editable site settings (phone, email, social media links)
- **Responsive Design**: Mobile-first approach with modern UI
- **Image Management**: Before/After image comparison with slider
- **Service Categories**: Residential and Commercial cleaning with sub-types

## 🛠️ Tech Stack

### Frontend
- React 18 + TypeScript
- Vite for build tooling
- Tailwind CSS + Shadcn UI
- React Router DOM
- TanStack Query for data fetching
- Lucide React for icons

### Backend
- Node.js + Express.js
- MongoDB with Mongoose
- Nodemailer for email sending
- CORS enabled
- Environment variables support

## 📁 Project Structure

```
House-Clean/
├── frontend/          # React frontend application
├── backend/           # Node.js backend API
└── README.md
```

## 🚀 Quick Start

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file with required environment variables (see backend/README.md)

4. Start development server:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

## 🌐 Deployment

### Render.com

1. Connect your GitHub repository
2. Set environment variables in Render dashboard
3. Deploy backend and frontend separately
4. Update CORS_ORIGIN to your frontend URL

### Environment Variables

Required environment variables for backend:
- `MONGODB_URI`: MongoDB connection string
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`: Email configuration
- `ADMIN_EMAIL_TO`, `ADMIN_EMAIL_FROM`: Admin email settings
- `CORS_ORIGIN`: Frontend URL for CORS

## 📱 Admin Panel

Access admin panel at `/admin` route:
- Manage cleaning services
- Configure site settings
- View customer messages
- Upload service images

## 🔧 Available Scripts

### Backend
- `npm start`: Production server
- `npm run dev`: Development server with auto-reload
- `npm run build`: Build script (for deployment compatibility)

### Frontend
- `npm run dev`: Development server
- `npm run build`: Production build
- `npm run preview`: Preview production build

## 📞 Support

For questions or issues, please contact the development team.
