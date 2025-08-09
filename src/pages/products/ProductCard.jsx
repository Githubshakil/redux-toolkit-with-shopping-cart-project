import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/features/carts/cartSlice'

const ProductCard = ({product}) => {
    const {id,name,image,price,category,date,description} = product || {}
    const dispatch = useDispatch()


    const handleAddToCart = () => {
      dispatch(addToCart(product))
    }
    
  return (
    <div className=' relative'>
        <div className="card bg-white w-96 shadow-sm">
  <figure>
    <div >
      <img
      src={image}
      alt={name}
      className='w-full h-48 object-cover' />
      <p className='bg-blue-700/70 absolute top-4 right-4 px-3 py-1 rounded text-white font-semibold '>{category}</p>
    </div>
  </figure>
  <div className="card-body text-gray-700">
    <div className='grid grid-cols-3'>
      <h2 className="card-title col-span-2">{name}</h2>
      <p className='text-sm font-semibold '>{date}</p>
    </div>
    <p>{description}</p>
    <div className="card-actions items-center justify-end">
        <p className='text-xl font-semibold'>${price}</p>
      <button  onClick={handleAddToCart} className="btn bg-indigo-500 text-white hover:bg-indigo-700 hover:text-yellow-300 transition-colors duration-300">Add to Cart</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default ProductCard