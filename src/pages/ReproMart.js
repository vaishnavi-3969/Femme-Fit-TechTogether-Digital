import React, { useState } from 'react';
import { FaShoppingCart, FaTrashAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import fertilityTracker from '../assets/fertilityTracker.png';
import mestrualCup from '../assets/menstrualCups.png';
import organicPads from '../assets/organicPads.png';
import tampons from '../assets/tampons.png';
import test from '../assets/test.png';


const ReproductiveHealthProducts = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const products = [
    { id: 1, name: 'Menstrual Cups', price: 20, image: mestrualCup },
    { id: 2, name: 'Organic Pads', price: 10, image: organicPads },
    { id: 3, name: 'Reusable Tampons', price: 15, image: tampons },
    { id: 4, name: 'Fertility Tracker', price: 30, image: fertilityTracker },
    { id: 5, name: 'Pregnancy Test Kit', price: 8, image: test },
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="bg-gradient-to-br from-purple-500 to-pink-300 text-gray-900 min-h-screen p-10">
      <h2 className="text-3xl font-semibold mb-4">Reproductive Health Products</h2>
      <div className="grid grid-cols-3 gap-6">
        {products.map(product => (
          <motion.div
            key={product.id}
            className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={product.image} alt={product.name} className="mx-auto" />
            <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-500">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none"
            >
              Add to Cart
            </button>
          </motion.div>
        ))}
      </div>
      <div className="mt-6">
        <button
          onClick={() => setShowCart(!showCart)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none"
        >
          {showCart ? 'Hide Cart' : 'Show Cart'}
        </button>
      </div>
      {showCart && (
        <div className="mt-6">
          <h3 className="text-2xl font-semibold">Shopping Cart</h3>
          <div className="mt-4 space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center justify-between bg-white rounded-lg shadow p-3">
                <div className="flex items-center space-x-2">
                  <img src={item.image} alt={item.name} className="w-8 h-8" />
                  <p>{item.name}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <p className="text-gray-500">${item.price}</p>
                  <button onClick={() => removeFromCart(item.id)}>
                    <FaTrashAlt size={16} className="text-red-500 cursor-pointer" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between">
            <p className="text-xl font-semibold">Total: ${calculateTotal()}</p>
            <a
              href="https://buy.stripe.com/test_cN28xZ8n978J3a8dQS" 
              className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none"
            >
              Proceed to Payment
            </a>
          </div>
        </div>
      )}
      <div className="mt-6">
        <h3 className="text-2xl font-semibold">Sustainable Disposal</h3>
        <p className="mt-2">
          Properly dispose of reproductive health products to minimize environmental impact. Follow local guidelines for recycling or disposal.
        </p>
      </div>
    </div>
  );
};

export default ReproductiveHealthProducts;
