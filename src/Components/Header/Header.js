import React from "react";
import ReactDOM from "react-dom";
import classes from "./Header.module.css";

import logo from "../../Assets/logo.png";
import search_icon from "../../Assets/Group 2964.png";
import login_icon from "../../Assets/Group 2966.png";
import love_icon from "../../Assets/Group 2965.png";
import home_icon from "../../Assets/Group 2967.png";
import cart_icon from "../../Assets/Cart.png";

const Header = () => {
  const header_left1 = [
    { id: 1, name: "Free Returns " },
    { id: 2, name: "Try At Home " },
    { id: 3, name: "24 Hr Dispatch" },
  ];
  const header_left2 = [
    { id: 1, name: "Glasses" },
    { id: 2, name: "Sunglasses" },
    { id: 3, name: "Eye-Test" },
    { id: 4, name: "Blogs" },
  ];
  const header_right1 = [
    { id: 1, name: "+441613125767" },
    { id: 2, name: "Help" },
    { id: 3, name: "Log In" },
  ];
  return (
    <React.Fragment>
      <div className={classes.break_line}></div>
      <div className={classes.Navbar}>
        <div className={classes.header_left}>
          <div className={classes.left_1}>
            {header_left1.map((user) => (
              <a key={user.id} href="#">
                {user.name}
              </a>
            ))}
          </div>
          <div className={classes.left_2}>
            {header_left2.map((user) => (
              <a key={user.id} href="#">
                {user.name}{" "}
              </a>
            ))}
          </div>
        </div>

        <div className="header_middle_section">
          <img src={logo} alt="logo" width="200" height="100"></img>
        </div>

        <div className={classes.header_right}>
          <div className={classes.right_1}>
            {header_right1.map((user) => (
              <a key={user.id} href="#">
                {user.name} |{" "}
              </a>
            ))}
          </div>
          <div className={classes.right_2}>
            <img src={search_icon}></img>
            <img src={login_icon}></img>
            <img src={love_icon}></img>
            <img src={home_icon}></img>
            <img src={cart_icon}></img>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
