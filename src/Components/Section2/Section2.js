import React from "react";
import classes from "./Section2.module.css";

import Anti_reflection_glass_image from "../../Assets/7.jpg";
import dispatch_image from "../../Assets/Group 6249.png";
import Free_coating_image from "../../Assets/Image 30.png";

const Section2 = () => {
  return (
    <React.Fragment>
      <div className={classes.gridContainer}>
        <div className={classes.img1}>
          <img src={Anti_reflection_glass_image}></img>
          <button>Shop Men</button>
          <button>Shop Women</button>
        </div>
        <div className={classes.img2}>
          <img src={Free_coating_image}></img>
        </div>
        <div className={classes.img3}>
          <img src={dispatch_image}></img>
        </div>
      </div>
      <div className={classes.row_2}>
        <h1>Your eyes are splendid. Let people see them clearly.</h1>
        <p className={classes.section1_para}>
          We know how frustrating glasses glare can be. Anti-reflective or
          anti-glare coating prevents glare on your lenses - letting almost all
          light through. Not only do anti-reflective glasses help in computer
          use and driving at night, they also allow other people to see you
          clearly. You don’t need to tilt your head at awkward angles while
          getting photographed, either! Since more light reaches your eyes,
          you’ll also notice an improvement in your vision. And the best part?
          Anti-glare, anti-scratch, and anti-UV coatings are all free of cost at
          Specscart!
        </p>
      </div>
    </React.Fragment>
  );
};
export default Section2;
