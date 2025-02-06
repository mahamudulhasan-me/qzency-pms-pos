# Product Management System (POS)

A modern Point of Sale system built with Next.js, featuring real-time search, cart management, and order processing capabilities.

## 🚀 Live Demo

[View Demo](https://qzency-pms-pos.vercel.app/)

## ✨ Features

### Product Management

- Dynamic product grid layout with detailed product cards
- Real-time search with debounce optimization
- Auto-scroll pagination for smooth product browsing
- Responsive design for all screen sizes

### Cart & Checkout

- Add/remove products to cart
- Quantity adjustment
- Dynamic price calculations
- Order summary with subtotal, discounts, and total
- Invoice generation

### User Experience

- Full-screen mode for immersive checkout
- Keyboard shortcuts for quick navigation:
  - Press `/` to focus search
  - Press `Enter` for full-screen mode
- Optimized performance with Redux state management

## 🛠️ Built With

- [Next.js](https://nextjs.org/) - React framework
- [Redux](https://redux.js.org/) - State management
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Lodash](https://lodash.com/) - Utility functions

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/mahamudulhasan-me/qzency-pms-pos.git
```

2. Install dependencies:

```bash
cd qzency-pms-pos
npm install
# or
yarn install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔄 API Integration

The system integrates with the following API endpoints:

- Base URL: `https://www.qshopy.qzency.com/core/test/product`
- Search & Pagination: `https://www.qshopy.qzency.com/core/test/product?keyword=camera&limit=20&page=1`

Parameters:

- `keyword`: Search term for filtering products
- `page`: Current page number for pagination
- `limit`: Number of products per page

## 👤 Author

Mahamudul Hasan

- GitHub: [@mahamudulhasan-me](https://github.com/mahamudulhasan-me/)
- LinkedIn: [Mahamudul Hasan](https://www.linkedin.com/in/mahamudulhasan-me/)

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Redux Documentation](https://redux.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
