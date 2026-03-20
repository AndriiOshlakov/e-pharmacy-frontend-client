# 💊 E-Pharmacy (Frontend)

## 📌 Загальна інформація

**Назва проекту:** E-Pharmacy (client)  
**Мета проекту:** Розробка веб-платформи для онлайн-замовлення медикаментів

E-Pharmacy — це сучасний веб-додаток, який дозволяє користувачам знаходити ліки, переглядати аптеки, додавати товари в кошик та оформлювати замовлення.

---

## 🎨 UI / UX Вимоги

- 📱 Mobile: від 320px (гумова), адаптив з 375px
- 📲 Tablet: від 768px
- 💻 Desktop: від 1440px

### ✔ Основні вимоги:

- Валідна верстка
- Retina підтримка
- Оптимізація зображень
- SVG sprite для іконок
- Підключення кастомних шрифтів
- Favicon

---

## 🧰 Використані технології

### Frontend:

- Next.js (App Router)
- React
- TypeScript
- TanStack Query (React Query)
- Zustand
- Axios
- CSS Modules

### Додаткові бібліотеки:

- React Hook Form → форми та валідація
- React Ellipsis Text → обрізка тексту
- MUI / Blueprint → UI компоненти

---

## 🧱 Архітектура

### 🔹 SharedLayout (`/`)

Містить:

- Header
- Footer
- Обгортка для всіх сторінок

---

## 🔝 Header

- Logo → переходить на Home
- Navigation:
  - Home
  - Medicine store
  - Medicine
- Auth:
  - Register
  - Login

---

## 🔻 Footer

- Logo
- Текст:

  > "Get the medicine to help you feel better..."

- Social links:
  - Facebook
  - Instagram
  - YouTube

- Navigation:
  - Home
  - Medicine store
  - Medicine

- Bottom:
  - © E-Pharmacy 2023
  - Privacy Policy
  - Terms & Conditions

---

# 👤 НЕАВТОРИЗОВАНИЙ КОРИСТУВАЧ

---

## 📝 Register Page (`/register`)

- Форма:
  - name
  - email
  - phone
  - password
- Валідація
- Toast помилки
- Після:
  - ✔ авто-логін
  - ✔ redirect

---

## 🔐 Login Page (`/login`)

- Форма:
  - email
  - password
- Валідація
- Toast помилки
- Після:
  - ✔ redirect на Home

---

## 🏠 Home Page (`/home`)

### 🔹 Main Banner

- "Your medication delivered"

---

### 🔹 Promo Banners

- Huge Sale (70%)
- Secure Delivery (100%)
- Off (35%)

---

### 🔹 Medicine Stores (6 random)

- Назва
- Адреса
- Телефон
- Статус (OPEN/CLOSE)

➡️ click → Shop Page

---

### 🔹 Add Pharmacy Section

- CTA: "Buy medicine"
- Redirect → `/medicine-store`

---

### 🔹 Reviews

- Avatar
- Name
- Comment

📡 Дані з backend

---

# 🏪 Medicine Store Page (`/medicine-store`) — Public

- Список аптек:
  - Назва
  - Адреса
  - Телефон
  - Статус
  - Рейтинг ⭐
  - "Visit Store"

📡 Дані з backend

---

# 💊 Medicine Page (`/medicine`) — Private

### 🔍 Фільтрація:

- Category
- Search input
- Filter button

### 📦 Продукти:

- Image
- Name
- Price

### ➕ Дії:

- Add to cart
- Details

### 📄 Пагінація:

- Backend-driven

### ❌ Empty state:

> "Nothing was found for your request"

---

# 📦 Product Page (`/product`)

### 🔹 Overview:

- Image
- Name
- Brand
- Price
- Rating

### 🔹 Actions:

- Change quantity
- Add to cart

---

### 🔹 Tabs:

- Description
- Reviews

---

### 🔹 Reviews:

- Name
- Date
- Comment
- Rating ⭐

---

# 🛒 Cart Page (`/cart`) — Private

### 🧾 Shipping Form:

- Name
- Email
- Phone
- Address

---

### 💳 Payment:

- Cash
- Bank

---

### 📦 Cart Items:

- Product name
- Price
- Quantity
- Remove

---

### 💰 Summary:

- Total price

---

### 🚀 Place Order:

- POST → backend

---

## 🔐 Authentication

- Cookie-based auth
- Access Token (15 min)
- Refresh Token (1 day)
- Auto refresh через interceptor

---

## 🔄 API

- Auth:
  - register / login / logout
- Products:
  - search / filter / pagination
- Cart:
  - add / remove / update
- Orders:
  - checkout

---

## ⚙️ ENV

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```
