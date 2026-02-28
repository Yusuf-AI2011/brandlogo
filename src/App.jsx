import React from "react";
import "./App.css";

import All from "./components/All";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Katalog from "./components/Katalog";
import Navbar from "./components/Navbar";
import New from "./components/New";
import Price from "./components/Price";
import Unusual from "./components/Unusual";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Katalog />
      <Price />
      <Unusual />
      <New />
      <All />
      <Clients />
      <Footer />
    </div>
  );
};

export default App;
