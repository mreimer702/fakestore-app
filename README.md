# FakeStore App

This is a e-commerce application that allows users to browse products, view details, make changes and add items to their cart. The app pulls data from the FakeStore API and is built with React for the frontend.

## Features

- **Product Listing**: Displays a list of products with images, names, and prices.
- **Product Details**: View detailed information about a selected product.
- **Add, Edit and Delete Products**: Users can add, edit or delete products on the website.
- **Shopping Cart**: Users can add products to their shopping cart and view the total price.

## Technologies Used

- **React**: For building the user interface.
- **React Router**: For navigation between pages.
- **FakeStore API**: A free API providing product data for the app.
- **CSS**: For styling the components.

## Setup

### Prerequisites

Ensure you have the following installed:
- Node.js
- npm (Node package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/fakestore-app.git
   cd fakestore-app

   2. Navigate to the project directory:
   ```bash
   cd in-n-out-menu
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## File Structure
```
📁 fakestore-app
│-- 📁 src
│   │-- 📄 App.jsx  # Main component
│   │-- 📄 index.html  # Entry point
│   │-- 📁 images  # Image for icon
│   │-- 📄 styles.css  # Custom styles
|   |-- 📁 components
│-- 📄 package.json  # Project dependencies
│-- 📄 README.md  # Documentation
```

## Usage
1. Upon launching the app, you will see the homepage with a list of products.
2. Clicking on a product will take you to the product details page.
3. You can add products to your cart.

## Future Improvements
- Add shopping cart and cart functionality.
- Include a search/filter option.
- Improve mobile responsiveness.