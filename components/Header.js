import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../assets/cart-icon.svg";
import WishList from "../assets/wishList.svg";
import { useSelector } from "react-redux";

export default function Header() {
  const cartItems = useSelector((state) => state.cartItems);
  console.log(cartItems);
  const wishListItem = useSelector((state) => state.wishList);
  // console.log(wishListItem);
  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <Link className="cart-icon" to="/cart">
          <img src={CartIcon} alt="cart-icon" />
          <div className="cart-items-count">
            {cartItems.reduce(
              (accumulator, currentItem) => accumulator + currentItem.quantity,
              0
            )}
          </div>
        </Link>
        <Link className="cart-icon" to="/wishlist">
          <img src={WishList} className="wishList" alt="wishList" />
          <div className="cart-items-count">{wishListItem.length}</div>
        </Link>
      </div>
    </header>
  );
}
