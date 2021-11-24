import React, { useEffect } from "react";
import BottomNavigation from "reactjs-bottom-navigation";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Header } from "./Components/Header";
import { HomeScreen } from "./Screens/HomeScreen";
import { setProducts } from "./redux/actions/productsActions";
import axios from "axios";
import { Footer } from "./Components/Footer";
import { SingleProductScreen } from "./Screens/SingleProductScreen";
import { ProductScreen } from "./Screens/ProductScreen";
import { AboutScreen } from "./Screens/AboutScreen";
import { CartScreen } from "./Screens/CartScreen";
import { CheckoutScreen } from "./Screens/CheckoutScreen";
import { AuthScreen } from "./Screens/AuthScreen";
import { ScrollUpButton } from "./Components/ScrollUpButton";
import { toast } from "react-toastify";
import { Error404 } from "./Screens/Error404";
import { Header2 } from "./Components/Header2";
require("dotenv").config();

function App() {
  toast.configure();
  const dispatchProduct = useDispatch();

  const fetchProudct = async () => {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        dispatchProduct(setProducts(res.data));
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    fetchProudct();
  }, []);
  const bottomNavItems = [
    {
      title: "Home",
    },

    {
      title: "Search",
    },

    {
      title: "Notifications",
    },

    {
      title: "Menu",

      onClick: () => alert("menu clicked"),
    },
  ];
  return (
    <>
      {/* <Header /> */}
      <Header2 />
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/product" component={ProductScreen} />
        <Route path="/aboout" component={AboutScreen} />
        <Route path="/productdetail/:id" component={SingleProductScreen} />
        <Route path="/cart" component={CartScreen} />
        <Route path="/checkout" component={CheckoutScreen} />
        <Route path="/register" component={AuthScreen} />
        <Route component={Error404} />
      </Switch>
      <Footer />
      {/* <ScrollUpButton /> */}
      {/* <BottomNavigation
        items={bottomNavItems}
        defaultSelected={0}
        onItemClick={(item) => console.log(item)}
      /> */}
    </>
  );
}

export default App;
