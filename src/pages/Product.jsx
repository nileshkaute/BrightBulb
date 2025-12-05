import React from 'react'
import Filter from '../components/productComponents/Filter'
import Divider from '../components/Divider'
import ProductHero from '../components/productComponents/ProductHero'
import ProductSection from '../components/productComponents/ProductSection'

const Product = () => {
  return (
    <>
   <div className=' bg-linear-to-r from-amber-600 to-yellow-400 w-full h-screen'>

   <ProductHero/> 

<Filter/>

<ProductSection/>

     
   </div>
    </>
  )
}

export default Product