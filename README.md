# Tech Store

A responsive e-commerce frontend built with React, TypeScript, Tailwind CSS, React Router, and Context API.

Tech Store allows users to browse technology products, search and filter the catalog, view product details, manage a shopping cart, and complete a checkout flow.

## Live Demo

[View Live Demo](LIVE_DEMO_URL)

## Features

- Browse a catalog of technology products
- Search products by name
- Filter products by category
- Sort products
- View individual product details
- Display product stock availability
- Add products to the shopping cart
- Increase and decrease product quantities
- Remove products from the cart
- Dynamic cart item count
- Automatic subtotal calculation
- Persistent cart using localStorage
- Checkout form with validation
- Order summary
- Empty-cart and no-results states
- Responsive navigation
- Custom 404 page
- Responsive layouts for mobile, tablet, and desktop

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Context API
- localStorage

## Technical Implementation

### State Management

Cart state is managed globally using React Context API, allowing cart data and actions to be shared throughout the application.

### Persistent Cart

Cart data is stored in localStorage so products remain in the cart after the browser is refreshed.

### Routing

React Router is used for client-side navigation between the product catalog, product details, cart, checkout, and other application pages.

### Product Filtering and Sorting

The product catalog supports searching, category filtering, and sorting to make products easier to discover.

### Responsive Design

The interface was built with Tailwind CSS and adapts across mobile, tablet, and desktop screen sizes.

## Project Structure

```text
src/
├── components/
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── ProductCard.tsx
├── context/
│   ├── CartContext.ts
│   ├── CartProvider.tsx
│   └── useCart.ts
├── data/
│   └── products.ts
├── pages/
│   ├── Cart.tsx
│   ├── Checkout.tsx
│   ├── Home.tsx
│   ├── NotFound.tsx
│   ├── ProductDetails.tsx
│   └── Products.tsx
├── types/
│   ├── CartItem.ts
│   └── Product.ts
├── App.tsx
├── index.css
└── main.tsx
