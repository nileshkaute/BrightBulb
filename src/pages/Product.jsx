import React from 'react'
import Filter from '../components/productComponents/Filter'
import Divider from '../components/Divider'
import ProductHero from '../components/productComponents/ProductHero'
import ProductSection from '../components/productComponents/ProductSection'

const Product = () => {
  return (
    <>
      <div className="bg-linear-to-r from-amber-600 to-yellow-400 w-full min-h-screen">
        {/* Hero Section */}
        <ProductHero /> 

        {/* Main Content: Filter + Products */}
        <div className="flex gap-6 px-6 mt-6">
          {/* Sidebar Filter */}
          <div className="w-1/4">
            <Filter />
          </div>

          {/* Product Section */}
          <div className="w-3/4">
            <ProductSection />
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
