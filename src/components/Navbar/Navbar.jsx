import React, { useState } from "react";
import "./Navbar.css";

import logo from "../assets/rbjjlogo.png";
import cart from "../assets/cart_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("inicio");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Raiz Jiu-Jitsu</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("inicio");
          }}
        >
          Início {menu === "inicio" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("produtos");
          }}
        >
          Produtos {menu === "produtos" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("fale");
          }}
        >
          Fale conosco {menu === "fale" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart} alt="" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
