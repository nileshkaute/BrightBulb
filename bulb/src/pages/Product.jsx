import React, { useState } from 'react'
import Filter from '../components/productComponents/Filter'
import Divider from '../components/Divider'
import ProductHero from '../components/productComponents/ProductHero'
import ProductSection from '../components/productComponents/ProductSection'

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <>
      <div className="bg-linear-to-r from-amber-600 to-yellow-400 w-full min-h-screen">
        {/* Hero Section */}
        <ProductHero /> 

        {/* Main Content: Filter + Products */}
        <div className="flex gap-6 px-6 mt-6">
          {/* Sidebar Filter */}
          <div className="w-1/4">
            <Filter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
          </div>

          {/* Product Section */}
          <div className="w-3/4">
            <ProductSection selectedCategory={selectedCategory} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Product

