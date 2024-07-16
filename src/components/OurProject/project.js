import React, { useState } from "react";
import Styles from "./project.module.css";

const projects = [
  {
    title: "Genderless Kei - Japan's Hot",
    description:
      "Set to launch on the manufacturer's new A330neo aircraft in 2017, it's offering lots of",
    srcc: "/images/japan.JPG", 
  },
  {
    title: "Better Strategy & Quality",
    description:
      "Set to launch on the manufacturer's new A330neo aircraft in 2017, it's offering lots of",
    srcc: "/images/projectimg1.png",  
  },
  {
    title: "Genderless Kei - Japan's Hot",
    description:
      "Set to launch on the manufacturer's new A330neo aircraft in 2017, it's offering lots of",
    srcc: "/images/japan1.JPG",  
  },
];

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, 3000); // Change image every 3 seconds

  //   return () => clearInterval(interval); // Clean up the interval on component unmount
  // }, []);

  const handleProjectClick = (index) => {
    setCurrentIndex(index);
    // console.log(currentIndex);
  };

  return (
    <div className={Styles.project}>
      <h3>OUR PROJECT</h3>
      <h2>WHY WE ARE BEST</h2>
      <div className={Styles.projectContent}>
        <div className={Styles.projectImg}>
          <img src={projects[currentIndex].srcc} alt="projectimg" />
        </div>
        <div className={Styles.projectText}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${Styles.projectDiv} ${
                index === currentIndex ? Styles.active : ""
              }`}
              onClick={() => handleProjectClick(index)}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
