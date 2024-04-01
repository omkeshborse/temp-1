import React from "react";
import WishList from "../components/WishList";
import { useSelector } from "react-redux";

export default function WishList() {
  const wishItems = useSelector((state) => state.wishList);
  // console.log(wishItems);
  return (
    <div className="cart-container">
      <h2>Items in Your Wish List</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <h3>Products</h3>
        </div>
        {wishItems.map(({ productID: id, title, rating, price, image }) => {
          // console.log({ id, title, rating, price, image });
          return (
            <WishList
              key={id}
              productID={id}
              title={title}
              price={price}
              imageUrl={image}
              rating={rating.rate}
            />
          );
        })}
        <div className="cart-header cart-item-container"></div>
      </div>
    </div>
  );
}
