import React, { useState } from "react";
import { Drawer } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./Header.css";

import { Basket } from "../../components/Basket/Basket";

import Logo from "../../assets/Logo.png";
import { ReactComponent as MenuSvg } from "../../assets/menu.svg";
import { ReactComponent as BasketSvg } from "../../assets/basket.svg";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openBasket, setOpenBasket] = useState(false);
  const { basket: basketProducts } = useSelector((state) => state.basket);

  const showBasketDrawer = () => setOpenBasket(true);
  const closeBasketDrawer = () => setOpenBasket(false);

  const showMenuDrawer = () => setOpenMenu(true);
  const closeMenuDrawer = () => setOpenMenu(false);

  return (
    <>
      <header className="header">
        <div className="container">
          <button onClick={showMenuDrawer}>
            <i>
              <MenuSvg />
            </i>
          </button>
          <img src={Logo} alt="logo" />
          <button onClick={showBasketDrawer}>
            <i>
              <BasketSvg />
            </i>
          </button>
        </div>
      </header>
      <Drawer placement="left" onClose={closeMenuDrawer} open={openMenu}>
        <div className="drawer__container">
          <div className="drawer__info">
            <div className="drawer__contacts">
              <p>Contact us</p>
              <p>+11 4783 4477 8999</p>
            </div>

            <div className="drawer__delivery">
              <p>Our delivery working from 09:00 to 23:00</p>
            </div>
          </div>

          <Link to={"/admin"} onClick={closeMenuDrawer}>
            Go to admin page
          </Link>
        </div>
      </Drawer>

      <Drawer
        placement="right"
        onClose={closeBasketDrawer}
        open={openBasket}
        style={{ backgroundColor: "#8e4575" }}
      >
        <Basket products={basketProducts} />
      </Drawer>
    </>
  );
};

export default Header;
