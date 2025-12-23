import React, { useState, useEffect } from 'react';
import Card from '../Card';
import { motion } from "framer-motion";
import { productsAPI } from '../../services/api';

const ProductSection = ({ selectedCategory }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await productsAPI.getAll();
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false);
        }
    };

    // Filter products by category
    const filteredProducts = selectedCategory && selectedCategory !== 'All'
        ? products.filter(p => p.category === selectedCategory)
        : products;

    return (
        <div
            className="featured h-screen bg-linear-to-r from-amber-600 to-yellow-400 p-6 text-center"
        >
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1, delay: 1 }}
            >
                <h1 className="text-gray-900 text-4xl font-bold underline mb-6 mt-5">
                    Our Products
                </h1>
                <p className="text-gray-700">
                    The future of light is here — and it's glowing in your home.
                </p>

                {/* Horizontal Scroll Container */}
                <div className="flex gap-10 overflow-x-auto no-scrollbar no-vertical-scrollbar snap-x snap-mandatory mt-12 px-4">
                    {loading ? (
                        <div className="text-gray-700">Loading products...</div>
                    ) : filteredProducts.length === 0 ? (
                        <div className="text-gray-700">No products found. Add some from the admin panel!</div>
                    ) : (
                        filteredProducts.map((product) => (
                            <Card
                                key={product._id}
                                title={product.title}
                                src={product.imageUrl}
                                description={product.description}
                                price={product.price}
                            />
                        ))
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default ProductSection;