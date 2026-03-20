# 💊 E-Pharmacy (Online Medicine Store)

## 📌 About the Project

E-Pharmacy is a full-stack web application that allows users to browse medicines, view pharmacies, add products to a cart, and place orders.

The platform supports authentication, product filtering, pagination, and a complete checkout flow.

---

## 🚀 Features

### 🏪 Medicine Store Page (`/medicine-store`) — Public

- Displays a list of pharmacies
- Each store card includes:
  - Store name
  - Address (street + city)
  - Phone number
  - Status (OPEN / CLOSE)
  - Rating (stars)
  - "Visit Store" button → redirects to store page

---

### 💊 Medicine Page (`/medicine`) — Private

- Product catalog with:
  - Image
  - Name
  - Price
- Search & Filter:
  - Category dropdown
  - Search input
  - Filter button
- Backend-driven:
  - Filtering
  - Pagination
- UI states:
  - "Nothing was found for your request"
- Actions:
  - Add to cart (with auth check)
  - Open product details

---

### 📦 Product Page (`/product`) — Public

- Product overview:
  - Image
  - Name
  - Brand
  - Price
  - Rating
- Quantity selector + Add to cart
- Tabs:
  - Description
  - Reviews
- Reviews include:
  - User name
  - Date
  - Comment
  - Rating
- Pagination for reviews

---

### 🛒 Cart Page (`/cart`) — Private

- Shipping form:
  - Name
  - Email
  - Phone
  - Address
- Payment methods:
  - Cash On Delivery
  - Bank
- Cart items:
  - Product name
  - Price
  - Quantity controls
  - Remove button
- Order summary:
  - Total price
- "Place order" button → sends request to backend

---

## 🔐 Authentication

- Registration & Login
- Session-based authentication:
  - Access Token (15 min)
  - Refresh Token (1 day)
- Automatic token refresh
- Protected routes:
  - `/medicine`
  - `/cart`

---

## 🧠 Tech Stack

### Frontend

- Next.js (App Router)
- React
- TypeScript
- React Query (TanStack Query)
- Zustand (state management)
- Axios
- CSS Modules

### Backend

- Node.js
- Express
- MongoDB + Mongoose
- JWT-like session system (custom tokens)
- Cookie-based authentication

---

## 🔄 API Features

- Authentication:
  - Register / Login / Logout
  - Session refresh
- Products:
  - Pagination
  - Filtering
  - Search
- Cart:
  - Add / Remove / Update quantity
- Orders:
  - Checkout flow

---

## 📦 Installation

```bash
# Clone repo
git clone <repo-url>

# Install dependencies
npm install

# Run frontend
npm run dev
```
