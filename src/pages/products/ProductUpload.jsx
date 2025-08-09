import React from 'react'

const ProductUpload = () => {
  return (
    <div className='max-w-md mx-auto bg-white shadow-md rounded-lg p-6'>
      <h2 className='text-xl font-semibold mb-4 text-gray-700'>Add New Product</h2>



      <form>
        {/* name */}
        <div>
          <label className='text-sm font-medium block text-gray-600'>Product Name</label>
          <input type="text" name='name' id='name' placeholder='Add product name' className='w-full bg-gray-50 text-gray-700 mt-1 p-2 rounded-lg focus:outline focus:ring-1 border border-gray-200' />
        </div>
      </form>
    </div>
  )
}

export default ProductUpload