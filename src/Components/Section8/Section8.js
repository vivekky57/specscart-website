import React from "react";
import classes from "./Section8.module.css";
import ourFeed_img1 from "../../Assets/Our_feed_img1.png";
import ourFeed_img2 from "../../Assets/Our_feed_img2.png";
import ourFeed_img3 from "../../Assets/Our_feed_img3.png";
import ourFeed_img4 from "../../Assets/Our_feed_img4.png";
import { SocialIcon } from "react-social-icons";

const Section8 = () => {
  const data = [
    { id: 1, image: ourFeed_img1 },
    { id: 2, image: ourFeed_img2 },
    { id: 3, image: ourFeed_img3 },
    { id: 4, image: ourFeed_img4 },
  ];
  return (
    <React.Fragment>
      <div className={classes.section_1}>
        <h1>Our Feeds</h1>
      </div>
      <div className={classes.section_2}>
        {data.map((data) => (
          <img key={data.id} src={data.image}></img>
        ))}
      </div>
      <div className={classes.section_3}>
        <div className={classes.section_3_inner}>
          <p>Follow @Specscartuk</p>
          <SocialIcon
            className={classes.social_icon}
            network="instagram"
            bgColor="#fff"
            fgColor="#999"
          />
          <SocialIcon
            className={classes.social_icon}
            network="facebook"
            bgColor="#fff"
            fgColor="#999"
          />
          <SocialIcon
            className={classes.social_icon}
            network="twitter"
            bgColor="#fff"
            fgColor="#999"
          />
          <SocialIcon
            className={classes.social_icon}
            network="youtube"
            bgColor="#fff"
            fgColor="#999"
          />
          {/* add icon insta facebook twitter youtube */}
        </div>
      </div>
    </React.Fragment>
  );
};
export default Section8;
