import React from 'react'

const ProductCard = ({product}) => {
    const {id,name,image,price,category,date} = product || {}
    console.log(product)
  return (
    <div>
        <div className="card bg-white w-96 shadow-sm">
  <figure>
    <img
      src={image}
      alt={name}
      className='w-full h-48 object-cover' />
  </figure>
  <div className="card-body text-gray-700">
    <h2 className="card-title">{name}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions items-center justify-end">
        <p className='text-xl font-semibold'>${price}</p>
      <button className="btn bg-indigo-500 text-white hover:bg-indigo-700 hover:text-yellow-300 transition-colors duration-300">Add to Cart</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default ProductCard