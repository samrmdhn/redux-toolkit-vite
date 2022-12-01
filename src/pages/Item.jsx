import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

export default function Item() {
  const [loading, setLoading] = useState("");
  const [data, setData] = useState({});
  const [notif, setNotif] = useState("");

  const dispatch = useDispatch();

  const { id } = useParams();

  const getData = async () => {
    try {
      setLoading("Loading..");
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const dataRes = await res.json();

      setData(dataRes);
      setLoading("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const cartHandle = () => {
    dispatch(
      addItem({
        id: data.id,
        title: data.title,
        price: data.price,
        brand: data.brand,
        quantity: 1,
      })
    );

    setNotif("Added to cart!");
  };

  if (notif === "Added to cart!") {
    setTimeout(() => {
      setNotif("");
    }, 2000);
  }

  return (
    <div>
      {notif}
      <h3>Item Details</h3>
      {loading}

      <div>{data.title}</div>
      <div>{data.brand}</div>
      <div>{data.price}</div>
      <button onClick={cartHandle}>Add to Cart</button>
    </div>
  );
}
