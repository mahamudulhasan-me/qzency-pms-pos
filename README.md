# Product Management System (POS)

A modern Point of Sale system built with Next.js, featuring real-time search, cart management, and order processing capabilities.

## 🚀 Live Demo

[View Demo](your-demo-link-here)

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

- Node.js (v14 or higher)
- npm or yarn

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/pos-system.git
```

2. Install dependencies:

```bash
cd pos-system
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

## 🎯 Key Features Implementation

### Search Functionality

```javascript
// Debounced search implementation
const debouncedSearch = debounce((searchTerm) => {
  // API call logic
}, 500);
```

### Cart Management

```javascript
// Redux slice example
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // Add to cart logic
    },
    // Other reducers
  },
});
```

## 📁 Project Structure

```
pos-system/
├── components/         # Reusable components
├── pages/             # Next.js pages
├── public/            # Static assets
├── redux/             # Redux store and slices
├── styles/            # Global styles
└── utils/             # Utility functions
```

## 🧪 Testing

Run the test suite:

```bash
npm test
# or
yarn test
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 👤 Author

Your Name

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📫 Support

For support, email your-email@example.com or raise an issue in the repository.

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Redux Documentation](https://redux.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
