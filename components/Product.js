import { useDispatch } from "react-redux";
import { addItem } from "../store/slice/cartSlice";
import { addItem as addItemInWishList } from "../store/slice/wishListSlice";

export default function Product({
  id: productID,
  title,
  rating,
  price,
  image,
}) {
  const dispatch = useDispatch();

  return (
    <div className="product">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="title-container">
        <h3>
          <a href="#">{title}</a>
        </h3>
      </div>
      <div className="price-rating-container">
        <p className="rating">{rating.rate} ★ ★ ★ ★</p>
        <p className="price">$ {price}</p>
      </div>
      <div className="cta-container">
        <button
          onClick={() =>
            dispatch(
              addItem({ productID, title, rating, price, image, quantity: 1 })
            )
          }
        >
          Add to Cart
        </button>
        <button
          onClick={() =>
            dispatch(
              addItemInWishList({
                productID,
                title,
                rating,
                price,
                image,
              })
            )
          }
        >
          add to wishlist
        </button>
      </div>
    </div>
  );
}
