import React from 'react'

const HomePage = () => {
  return (
    <div className='py-8'>
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-8'>
            <div className='col-span-2'>
                <div>Display Product</div>
            </div>
            <div>Add new products </div>
        </div>
    </div>
  )
}

export default HomePage