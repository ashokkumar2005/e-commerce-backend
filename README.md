# 🛒 E-Commerce Backend API (MERN Stack)

A scalable and production-ready **E-Commerce Backend API** built using **Node.js, Express.js, and MongoDB**.
This project follows **MVC architecture** and demonstrates real-world backend practices such as **RESTful API design, CRUD operations, and database management**.

---

## 🚀 Key Features

* 📦 **Product Management** – Full CRUD operations
* 🧾 **Order Management** – Create and retrieve orders
* 🔗 **RESTful APIs** – Clean and structured endpoints
* 🗄️ **MongoDB Integration** – NoSQL database using Mongoose
* ⚙️ **MVC Architecture** – Organized and scalable code structure
* 🌐 **CORS Enabled** – Secure cross-origin requests
* 🔐 **Environment Variables** – Secure configuration using dotenv

---

## 🧱 Project Structure

```
ecommerce-backend/
│
├── config/
│   └── db.js              # Database connection
│
├── models/
│   ├── Product.js        # Product schema
│   └── Order.js          # Order schema
│
├── controllers/
│   ├── productController.js
│   └── orderController.js
│
├── routes/
│   ├── productRoutes.js
│   └── orderRoutes.js
│
├── .env                  # Environment variables
├── server.js             # Entry point
└── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```
git clone https://github.com/your-username/ecommerce-backend.git
cd ecommerce-backend
```

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

## ▶️ Running the Server

### Development Mode

```
npm run dev
```

### Production Mode

```
npm start
```

---

## 🌐 API Endpoints

### 🛍️ Product APIs

| Method | Endpoint          | Description        |
| ------ | ----------------- | ------------------ |
| POST   | /api/products     | Create product     |
| GET    | /api/products     | Get all products   |
| GET    | /api/products/:id | Get single product |
| PUT    | /api/products/:id | Update product     |
| DELETE | /api/products/:id | Delete product     |

---

### 🧾 Order APIs

| Method | Endpoint        | Description      |
| ------ | --------------- | ---------------- |
| POST   | /api/orders     | Create order     |
| GET    | /api/orders     | Get all orders   |
| GET    | /api/orders/:id | Get single order |

---

## 🧪 Sample Request

### ➕ Create Product

**POST /api/products**

```json
{
  "name": "Smartphone",
  "price": 25000,
  "description": "Latest model smartphone",
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

## 📈 Future Enhancements

* 🔐 Authentication & Authorization (JWT, bcrypt)
* 🛒 Shopping Cart System
* 💳 Payment Gateway Integration (Stripe/Razorpay)
* 📦 Order Tracking System
* 📷 Image Upload (Multer / Cloudinary)
* 📊 Admin Dashboard

---

## 👨‍💻 Author

**Ashokkumar T**

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub!
