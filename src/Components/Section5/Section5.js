import React from "react";
import classes from "./Section5.module.css";

import glass1 from "../../Assets/Desk4.jpg";
import glass2 from "../../Assets/G1.jpg";

const Section5 = () => {
  return (
    <React.Fragment>
      <div className={classes.gridContainer}>
        <div>
          <p>Lorem Ipsum Dolor Sit Amet, Consectetur.</p>
          <img src={glass2} alt="eye glass image"></img>
        </div>
        <div>
          <img src={glass1} alt="eye glass image"></img>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices…
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Section5;
