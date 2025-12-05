import React from 'react'
import Card from '../Card'
import { motion } from "framer-motion";
const ProductSection = () => {
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
                    The future of light is here — and it’s glowing in your home.
                </p>

                {/* Horizontal Scroll Container */}
                <div className="flex gap-10 overflow-x-auto no-scrollbar no-vertical-scrollbar snap-x snap-mandatory mt-12 px-4">

                    <Card
                        title="LED Bulb"
                        src="https://images.unsplash.com/photo-1532007271951-c487760934ae?auto=format&fit=crop&q=60&w=600"
                        description="Bright and energy-efficient LED bulb designed for everyday lighting."
                        price="299"
                    />

                    <Card
                        title="Hanger Light"
                        src="https://images.unsplash.com/photo-1636368208791-17b81ed832d2?auto=format&fit=crop&q=60&w=600"
                        description="Elegant hanging light perfect for dining areas or living rooms."
                        price="1499"
                        className="mb"
                    />

                    <Card
                        title="Table Lamp"
                        src="https://plus.unsplash.com/premium_photo-1706072613979-e2bddb367f41?auto=format&fit=crop&q=80&w=1964"
                        description="Stylish table lamp with soft ambient lighting — ideal for study desks."
                        price="899"
                    />

                    <Card
                        title="Wall Light"
                        src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=60&w=600"
                        description="Modern wall-mounted light fixture offering warm diffused glow."
                        price="699"
                    />

                    <Card
                        title="Decorative Lamp"
                        src="https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&q=60&w=600"
                        description="Artistic decorative lamp that enhances your living room ambiance."
                        price="1299"
                    />

                  
                </div>
            </motion.div>
        </div>
    )
}

export default ProductSection