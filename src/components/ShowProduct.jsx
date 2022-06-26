import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  productSelectors,
  deleteProduct,
} from "../redux/features/productSlice";
import { Link } from "react-router-dom";

const ShowProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector(productSelectors.selectAll);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <div className="mt-5">
        <Link
          as="div"
          to="/add"
          className="py-2 px-4 bg-purple-700 text-white text-normal font-semibold rounded-lg"
        >
          Add New
        </Link>
      </div>
      {products.map((product, index) => (
        <div className="shadow p-5 mt-5" key={product.id}>
          <div className="w-6 h-6 rounded-full bg-slate-300 flex items-center justify-center mb-4">
            <span>{index + 1}</span>
          </div>
          <h4 className="text-xl font-bold">Title : {product.title}</h4>
          <h4 className="text-xl font-bold">Price : Rp. {product.price}</h4>
          <Link
            to={`edit/${product.id}`}
            className="px-2 bg-orange-500 mt-3 text-white text-normal font-semibold rounded-lg mr-2"
          >
            Edit
          </Link>
          <button
            onClick={() => dispatch(deleteProduct(product.id))}
            className="px-2 bg-red-500 mt-3 text-white text-normal font-semibold rounded-lg mr-2"
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
};

export default ShowProduct;
