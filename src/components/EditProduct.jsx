import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  productSelectors,
  updateProduct,
} from "../redux/features/productSlice";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const product = useSelector((state) =>
    productSelectors.selectById(state, id)
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (product) {
      setTitle(product.title);
      setPrice(product.price);
    }
  }, [product]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await dispatch(updateProduct({ id, title, price }));
    navigate("/");
  };

  return (
    <div className="mt-5">
      <form className="shadow p-5" onSubmit={handleUpdate}>
        <div>
          <label htmlFor="title" className="font-semibold text-xl">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="border w-full rounded-lg focus:outline-none text-slate-500 p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="price" className="font-semibold text-xl">
            Price
          </label>
          <input
            type="number"
            name="price"
            id="price"
            className="border w-full rounded-lg focus:outline-none text-slate-500 p-2"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="px-4 py-2 text-lg bg-purple-700 text-white font-normal rounded-lg"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
