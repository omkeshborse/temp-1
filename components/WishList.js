import React from "react";
import { useDispatch } from "react-redux";

import Delete from "../assets/delete.svg";
import {
  removeItem as removeItemFromWishList,
} from "../store/slice/wishListSlice";
export default function WishList({
  productID,
  title,
  rating,
  price,
  imageUrl,
}) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <img src={imageUrl} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{rating} ★ ★ ★ ★</p>
        </div>
      </div>
      <div className="item-price">${price}</div>
      <div className="item-quantity">
        <button
          className="delete-btn"
          onClick={() => dispatch(removeItemFromWishList(productID))}
        >
          <img className="del-image" src={Delete} alt="delete" />
        </button>
      </div>
    </div>
  );
}
