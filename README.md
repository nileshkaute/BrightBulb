# Bulb - Smart Lighting E-commerce Platform

A full-stack MERN application for managing and selling smart lighting products with a powerful admin panel.

## 🚀 Features

- **Frontend (React + Vite)**

  - Dynamic product catalog
  - Featured products section
  - Category-based filtering
  - Responsive design with Tailwind CSS

- **Backend (Node.js + Express + MongoDB)**

  - RESTful API
  - JWT authentication
  - Product management
  - Newsletter subscriptions
  - Dynamic page content

- **Admin Panel**
  - Secure login
  - Product CRUD operations
  - Featured product management
  - Category management
  - Subscriber list viewer
  - Page content editor

## 📁 Project Structure

```
bulb/
├── backend/          # Node.js + Express API
│   ├── config/       # Database configuration
│   ├── models/       # Mongoose schemas
│   ├── routes/       # API routes
│   ├── controllers/  # Business logic
│   └── middleware/   # Auth middleware
└── bulb/             # React frontend
    ├── src/
    │   ├── pages/    # Page components
    │   ├── components/ # Reusable components
    │   └── services/ # API service layer
    └── public/
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v14+)
- MongoDB (local or cloud)

### Backend Setup

1. Navigate to backend folder:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create `.env` file (copy from `.env.example`):

   ```bash
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/bulb
   JWT_SECRET=your_secret_key_here
   ```

4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to frontend folder:

   ```bash
   cd bulb
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

### Admin Setup

1. Create first admin user via API:

   ```bash
   curl -X POST http://localhost:5000/api/admin/register \
     -H "Content-Type: application/json" \
     -d '{"email":"YOUR_EMAIL","password":"YOUR_SECURE_PASSWORD"}'
   ```

2. Login at: `http://localhost:5173/admin/login`

## 🔐 Security

- JWT token-based authentication
- Password hashing with bcrypt
- Protected admin routes
- Environment variables for sensitive data

## 📝 API Endpoints

### Public

- `GET /api/products` - Get all products
- `GET /api/products/featured` - Get featured products
- `POST /api/subscribers` - Subscribe to newsletter
- `GET /api/pages/:page` - Get page content

### Admin (Protected)

- `POST /api/admin/login` - Admin login
- `POST /api/products` - Create product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product
- `GET /api/subscribers` - View subscribers
- `POST /api/pages` - Update page content

## 🎨 Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, Framer Motion, Axios
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Auth**: JWT, Bcrypt
- **Dev Tools**: ESLint, Nodemon

## 📄 License

MIT

## 👤 Author

Your Name
