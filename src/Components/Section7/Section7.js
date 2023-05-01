import React from "react";
import classes from "./Section7.module.css";

import img1 from "../../Assets/specscart_awards_follower_rewards.png";

const Section7 = () => {
  return (
    <React.Fragment>
      <div className={classes.gridContainer}>
        <div className={classes.section_1}>
          <h1>Awards.</h1>
          <h1>Followers. Rewards.</h1>
          <p>
            Our work speaks for itself - Specscart has been awarded first prize
            in Venture Further 2018 Business Category. We are constantly working
            to innovate new ways and technology to become UK’s leading Eye Care
            provider.
          </p>
        </div>
        <div className={classes.section_2}>
          <img src={img1} alt="Awards,Rewards,Achievement image"></img>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Section7;
