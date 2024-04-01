import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeItem,
} from "../store/slice/cartSlice";
import Delete from "../assets/delete.svg";
export default function CartItem({
  productID,
  title,
  rating,
  price,
  imageUrl,
  quantity,
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
        <button onClick={() => dispatch(decreaseItemQuantity({ productID }))}>
          -
        </button>
        <span>{quantity}</span>
        <button onClick={() => dispatch(increaseItemQuantity({ productID }))}>
          +
        </button>
        <button
          className="delete-btn"
          onClick={() => dispatch(removeItem({ productID }))}
        >
          <img className="del-image" src={Delete} alt="delete" />
        </button>
      </div>
      <div className="item-total">${(quantity * price).toFixed(2)}</div>
    </div>
  );
}
