import React from "react";

const ProductUpload = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Add New Product
      </h2>

      <form className="space-y-4">
        {/* name */}
        <div>
          <label className="text-sm font-medium block text-gray-600">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Add product name"
            className="w-full bg-gray-50 text-gray-700 mt-1 p-2 rounded-lg focus:outline focus:ring-1 border border-gray-200 focus:ring-indigo-500"
          />
        </div>

        {/* category */}

        <div>
          <label className="text-sm font-medium block text-gray-600">
            Category
          </label>
          <select id="category" name="category" className="w-full bg-gray-50 text-gray-700 mt-1 p-2 rounded-lg focus:outline focus:ring-1 border border-gray-200 focus:ring-indigo-500">
            <option value="">Choose a Category</option>
            <option value="fashion">Fashion</option>
            <option value="gadgets">Gadgets</option>
            <option value="bags">Bags</option>
            <option value="electronics">Electronics</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default ProductUpload;
