import React from "react";
import classes from "./Section3.module.css";
import { ComparisonSlider } from "react-comparison-slider";
import { useState } from "react";

import active_glare from "../../Assets/anti-glare-lenses-example-active-glare.jpg";
import normal_glare from "../../Assets/anti-glare-lenses-example-normal.jpg";
const Section3 = () => {
  const [value, setValue] = useState(50);
  return (
    <div className={classes.section_1}>
      <ComparisonSlider
        value={value}
        onValueChange={setValue}
        itemOne={<img className={classes.img_both} src={active_glare} />}
        itemTwo={<img className={classes.img_both} src={normal_glare} />}
        handleAfter={<div className="bg-black w-1 bottom-0 h-full"></div>}
        handleBefore={<div className="bg-black w-1 bottom-0 h-full"></div>}
        aspectRatio={4 / 3}
        handle={(props) => {
          return (
            <div
              onDoubleClick={() => {
                setValue(50);
              }}
              className={classes.slider}
            ></div>
          );
        }}
      />
    </div>
  );
};

export default Section3;
