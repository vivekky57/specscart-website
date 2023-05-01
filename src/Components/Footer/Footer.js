import React from "react";
import classes from "./Footer.module.css";
function Footer() {
  const data = [
    {
      id: 1,
      title: "glasses",
      resources: [
        {
          name: "Round Glasses",
          link: "#",
        },
        {
          name: "Wayfarer Glasses",
          link: "#",
        },
        {
          name: "Cat Eye Glasses",
          link: "#",
        },
        {
          name: "Rectanglar Glasses",
          link: "#",
        },
        {
          name: "Rimless Glasses",
          link: "#",
        },
        {
          name: "Verifocal Glasses",
          link: "#",
        },
        {
          name: "Transitions Glasses",
          link: "#",
        },
      ],
    },
    {
      id: 2,
      title: "Sunglasses",
      resources: [
        {
          name: "Aviator Sunglasses",
          link: "#",
        },
        {
          name: "Round Sunglasses",
          link: "#",
        },
        {
          name: "Cat Eye Sunglasses",
          link: "#",
        },
        {
          name: "Wayfare Sunglasses",
          link: "#",
        },
        {
          name: "Designer sunglasses",
          link: "#",
        },
        {
          name: "Polarised Sunglasses",
          link: "#",
        },
        {
          name: "Prescription Sunglasses",
          link: "#",
        },
      ],
    },
    {
      id: 3,
      title: "Help & FAQ",
      resources: [
        {
          name: "Your Prescription",
          link: "#",
        },
        {
          name: "Digital Blue Glasses",
          link: "#",
        },
        {
          name: "Lenses & Coatings",
          link: "#",
        },
        {
          name: "Anti Reflective Lenses",
          link: "#",
        },
        {
          name: "How to order",
          link: "#",
        },
        {
          name: "Delivery Information",
          link: "#",
        },
        {
          name: "Free Returns",
          link: "#",
        },
      ],
    },
    {
      id: 4,
      title: "About us",
      resources: [
        {
          name: "Our Story",
          link: "#",
        },
        {
          name: "Contact Us",
          link: "#",
        },
        {
          name: "Our Blog",
          link: "#",
        },
        {
          name: "Privacy Policy",
          link: "#",
        },
        {
          name: "Franchise",
          link: "#",
        },
      ],
    },
    {
      id: 5,
      title: "Subscribe",
      resources: [
        {
          name: "",
          link: "#",
        },
      ],
    },
    {
      id: 6,
      title: "Contact Us",
      resources: [
        {
          name: "",
          link: "#",
        },
      ],
    },
  ];
  const display = (item) => {
    console.log(item);
    console.log(item.length);
    let temp = "";
    for (let i = 0; i < item.length; i++) {
      console.log(item[i].name);
      temp += <p>item[i].name</p>;
    }
    console.log(item[0].name);
    return temp;
  };

  return (
    <React.Fragment>
      <div className={classes.gridContainer}>
        {data.map((item) => {
          return (
            <div key={item.id}>
              <h1>{item.title}</h1>
              {item.resources.map((type, index) => {
                return (
                  <a href={type.link} key={index}>
                    {type.name}
                  </a>
                );
              })}
            </div>
          );
          // item.map((subitem) => (
          //   <div>{subitem.resources.name}</div>
          // ))
        })}
      </div>
      {/* draw a white line */}
      <div>
        <p>Developed by HRM International Limited @ 2018 Specscart.</p>
      </div>
      <div>
        <a>Terms & Conditions | </a>
        <a>Privaccy Policy | </a>
        <a>Site Map </a>
      </div>
    </React.Fragment>
  );
}

export default Footer;
