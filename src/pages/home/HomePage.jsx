import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../products/ProductCard';

const HomePage = () => {

  const products = useSelector((state)=>state.products);
  console.log(products)
  return (
    <div className='py-8'>
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-8'>
            <div className='col-span-2'>
                <div className='grid lg:grid-cols-2 gap-y-8'>
                  {
                    products.length ? products.map((product, idx)=>(
                      <ProductCard key={idx} product={product}/>
                    )): <p>no product found</p>
                  }
                </div>
            </div>
            <div>Add new products </div>
        </div>
    </div>
  )
}

export default HomePage