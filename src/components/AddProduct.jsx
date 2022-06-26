import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveProduct } from "../redux/features/productSlice";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createProduct = async (e) => {
    e.preventDefault();
    await dispatch(saveProduct({ title, price }));
    navigate("/");
  };

  return (
    <div className="mt-5">
      <form className="shadow p-5" onSubmit={createProduct}>
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
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
