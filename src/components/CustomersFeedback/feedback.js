import React from "react";
import Styles from "./feedback.module.css";

const Feedback = () => {
  return (
    <div className={Styles.feedback}>
      <h3>CLIENT'S FEEDBACK</h3>
      <h2>PEOPLE'S SAY ABOUT US</h2>
      <p>
        Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s is
        reproduced below for those interested. Sections Bonorum at Malorum
        Original.
      </p>
      <p className={Styles.lastpara}><span>JANNAT TUMPA</span> - COO, AMERIMAR ENTERPRISES, INC.</p>
    </div>
  );
};

export default Feedback;
