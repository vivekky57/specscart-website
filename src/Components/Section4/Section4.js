import React from "react";
import classes from "./Section4.module.css";

import person1 from "../../Assets/5cb30b93b42e95ee807cc073b66ea1a2.png";
import person2 from "../../Assets/808675.png";
import person3 from "../../Assets/freepressjournal_import_2017_10_Tom-Cruise.png";

const Section4 = () => {
  const data = [
    {
      id: 1,
      image: person1,
      name: "Jully",
      rating: 5,
      description: "Some arbitary words",
    },

    {
      id: 2,
      image: person2,
      name: "Sakura",
      rating: 3,
      description: "Naturo Worlds",
    },

    {
      id: 3,
      image: person3,
      name: "Tom Cruise",
      rating: 5,
      description: "Mission Impossible",
    },
  ];

  return (
    <React.Fragment>
      <div></div>
    </React.Fragment>
  );
};
export default Section4;
