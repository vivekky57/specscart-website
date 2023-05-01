import React from "react";
import classes from "./Section1.module.css";

import image1 from "../../Assets/Image 39.png";
import image2 from "../../Assets/Image 35.png";
import image3 from "../../Assets/Group 6248.png";
const Section1 = () => {
  return (
    <React.Fragment>
      <div className={classes.gridContainer}>
        <div className={classes.column_1}>
          <h3>Home Trial Cart 2.0</h3>
          <h1>It’s An Experience! </h1>
          <h1>Four Frames. Three Lenses. 1Laser</h1>
          <button className={classes.btn_1}>Try Now</button>
          {/* <button className={classes.btn_2}></button> */}
          <a href="#" class={classes.play_btn}>
            <span></span>
          </a>
          <h4>Watch Whats New!</h4>
        </div>

        <div className={classes.animation_img}>
          {/* animated content  */}
          <img src={image2}></img>
          <img src={image1}></img>
          <img src={image3}></img>
        </div>
      </div>
      <div className={classes.row_2}>
        <h1>4 frames, 3 lenses, 7 days - direct to your home</h1>
        <p className={classes.section1_para}>
          We get it - sometimes you need to hold the glasses in your hand (or
          take a selfie wearing them) to know if they’re made for you or not.
          With our Free Home Trial, get 4 frames of your choice at your home,
          along with 3 cool lenses
        </p>
      </div>
    </React.Fragment>
  );
};

export default Section1;
