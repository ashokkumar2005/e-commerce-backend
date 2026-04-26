# 🛒 E-Commerce Backend (MERN Stack)

A fully functional **E-Commerce Backend API** built using **Node.js, Express.js, and MongoDB**.
This project follows a clean architecture and demonstrates real-world backend development practices including **CRUD operations, REST APIs, and database integration**.

---

## 🚀 Features

* 📦 Product Management (CRUD)
* 🧾 Order Management
* 🔗 RESTful API Design
* 🗄️ MongoDB Database Integration
* ⚙️ MVC Architecture
* 🌐 CORS Enabled
* 🔐 Environment Variables Support

---

## 🧱 Project Structure

```
ecommerce-backend/
│
├── config/
│   └── db.js
│
├── models/
│   ├── Product.js
│   └── Order.js
│
├── controllers/
│   ├── productController.js
│   └── orderController.js
│
├── routes/
│   ├── productRoutes.js
│   └── orderRoutes.js
│
├── .env
├── server.js
└── package.json
```

---

## ⚙️ Installation

### 1. Clone the repository

```
git clone https://github.com/your-username/ecommerce-backend.git
cd ecommerce-backend
```

### 2. Install dependencies

```
npm install
```

### 3. Setup environment variables

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

## ▶️ Run the Server

### Development mode:

```
npm run dev
```

### Production mode:

```
npm start
```

---

## 🌐 API Endpoints

### 🛍️ Product Routes

| Method | Endpoint          | Description        |
| ------ | ----------------- | ------------------ |
| POST   | /api/products     | Create product     |
| GET    | /api/products     | Get all products   |
| GET    | /api/products/:id | Get single product |
| PUT    | /api/products/:id | Update product     |
| DELETE | /api/products/:id | Delete product     |

---

### 🧾 Order Routes

| Method | Endpoint        | Description      |
| ------ | --------------- | ---------------- |
| POST   | /api/orders     | Create order     |
| GET    | /api/orders     | Get all orders   |
| GET    | /api/orders/:id | Get single order |

---

## 🧪 Example API Request

### Create Product

```
POST /api/products
```

```json
{
  "name": "Smartphone",
  "price": 25000,
  "description": "Latest model",
  "stock": 5
}
```

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv
* CORS

---

## 📌 Future Improvements

* 🔐 User Authentication (JWT)
* 🛒 Cart Functionality
* 💳 Payment Integration
* 📦 Order Status Tracking
* 📷 Image Upload (Multer / Cloudinary)

---

## 👨‍💻 Author

**Ashokkumar T**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
