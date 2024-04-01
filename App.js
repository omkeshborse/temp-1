import { useSelector } from "react-redux";
import "./App.css";

import Header from "./components/Header";
import { Outlet } from "react-router-dom";

export default function App() {
  const productList = useSelector((state) => state.products);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
