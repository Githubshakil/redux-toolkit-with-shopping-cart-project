import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {addProduct} from '../../redux/features/products/productSlice'

const ProductUpload = () => {



  const dispatch = useDispatch()
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    dispatch(addProduct(data))
  }



















  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Add New Product
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* name */}
        <div>
          <label className="text-sm font-medium block text-gray-600">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            {...register("name", { required: true })}
            placeholder="Add product name"
            className="w-full bg-gray-50 text-gray-700 mt-1 p-2 rounded-lg focus:outline focus:ring-1 border border-gray-200 focus:ring-indigo-500"
          />
        </div>

        {/* category */}

        <div>
          <label className="text-sm font-medium block text-gray-600">
            Category
          </label>
          <select
            id="category"
            name="category"
            {...register("category", { required: true })}
            className="w-full bg-gray-50 text-gray-700 mt-1 p-2 rounded-lg focus:outline focus:ring-1 border border-gray-200 focus:ring-indigo-500"
          >
            <option value="">Choose a Category</option>
            <option value="fashion">Fashion</option>
            <option value="gadgets">Gadgets</option>
            <option value="bags">Bags</option>
            <option value="electronics">Electronics</option>
          </select>
        </div>

        {/* product image Url */}

        <div>
          <label className="text-sm font-medium block text-gray-600">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            id="image"
            {...register("image", { required: true })}
            placeholder="http://"
            className="w-full bg-gray-50 text-gray-700 mt-1 p-2 rounded-lg focus:outline focus:ring-1 border border-gray-200 focus:ring-indigo-500"
          />
        </div>

        {/* price and date */}
        <div className="grid grid-cols-2 gap-4 ">
          <div>
            <label className="text-sm font-medium block text-gray-600">
              Price
            </label>
            <input
              type="number"
              name="price"
              {...register("price", { required: true })}
              id="price"
              placeholder="Amount"
              className="w-full bg-gray-50 text-gray-700 mt-1 p-2 rounded-lg focus:outline focus:ring-1 border border-gray-200 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium block text-gray-600">
              Upload Date
            </label>
            <input
              type="date"
              name="date"
              {...register("date", { required: true })}
              id="date"
              className="w-full bg-gray-50 text-gray-700 mt-1 p-2 rounded-lg focus:outline focus:ring-1 border border-gray-200 focus:ring-indigo-500"
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-full bg-indigo-500 hover:bg-indigo-700">Add Product</button>
      </form>
    </div>
  );
};

export default ProductUpload;
