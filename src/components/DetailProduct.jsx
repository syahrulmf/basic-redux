import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProducts, productSelectors } from "../redux/features/productSlice";

const DetailProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
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

  return (
    <div className="mt-5 shadow rounded-lg p-5">
      <h1 className="text-4xl text-black font-bold text-center">
        Detail Product
      </h1>

      <h1 className="text-2xl text-black font-bold">Title : {title}</h1>
      <h1 className="text-2xl text-black font-bold">Price : {price}</h1>
    </div>
  );
};

export default DetailProduct;
