import React from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";

export default function Cart() {
  const cartItems = useSelector((state) => state.cartItems);
  return (
    <div className="cart-container">
      <h2>Items in Your Cart</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>
        {cartItems.map(
          ({ productID: id, title, rating, price, image, quantity }) => {
            // console.log({ id, title, rating, price, image, quantity });
            return (
              <CartItem
                key={id}
                productID={id}
                title={title}
                price={price}
                quantity={quantity}
                imageUrl={image}
                rating={rating.rate}
              />
            );
          }
        )}
        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
          <div className="total">
            $
            {cartItems
              .reduce(
                (accumulator, currentItem) =>
                  accumulator + currentItem.quantity * currentItem.price,
                0
              )
              .toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}
