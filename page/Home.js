import { useSelector } from "react-redux";
import Product from "../components/Product";

function Home() {
  const productList = useSelector((state) => state.products);
  // useSelector((state) => {
  //   console.log(state);
  // });
  // useSelector(console.log);
  return (
    <div className="products-container">
      {productList.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </div>
  );
}
export default Home;
