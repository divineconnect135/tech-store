# Tech Store

A responsive e-commerce frontend built with React, TypeScript, Vite, Tailwind CSS, and React Router.

The project demonstrates core frontend development concepts including reusable components, state management, filtering, sorting, routing, cart management, localStorage persistence, responsive design, and form validation.

## Features

- Responsive home page
- Product catalog
- Product search
- Category filtering
- Product sorting
- Product details pages
- Stock availability
- Add products to cart
- Increase and decrease quantity
- Remove products from cart
- Cart item count
- Cart subtotal calculation
- Persistent cart using localStorage
- Checkout form
- Basic form validation
- Order summary
- Empty cart and no-results states
- Responsive navigation
- 404 page
- Mobile, tablet, and desktop layouts

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Context API
- localStorage

## What I Learned

This project helped me practice:

- Building reusable React components
- Working with TypeScript types and props
- Managing local state with `useState`
- Sharing global state with Context API
- Creating custom hooks
- Working with arrays using `map`, `filter`, `find`, `sort`, and `reduce`
- Creating dynamic routes with React Router
- Using URL search parameters for filters
- Building controlled forms
- Implementing basic form validation
- Persisting state with localStorage
- Handling product stock and disabled states
- Building responsive layouts with Tailwind CSS
- Creating empty and error UI states

## Project Structure

```text
src/
├── components/
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── ProductCard.tsx
│
├── context/
│   ├── CartContext.ts
│   ├── CartProvider.tsx
│   └── useCart.ts
│
├── data/
│   └── products.ts
│
├── pages/
│   ├── Cart.tsx
│   ├── Checkout.tsx
│   ├── Home.tsx
│   ├── NotFound.tsx
│   ├── ProductDetails.tsx
│   └── Products.tsx
│
├── types/
│   ├── CartItem.ts
│   └── Product.ts
│
├── App.tsx
├── index.css
└── main.tsx
```
