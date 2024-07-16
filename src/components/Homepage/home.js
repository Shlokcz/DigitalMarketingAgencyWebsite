import React, { useState } from "react";
import Styles from "./home.module.css";
import Form from "../form/form";

const Home = () => {

    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleButtonClick = () => {
      setIsPopupVisible(true);
    };
  
    const handleClosePopup = () => {
      setIsPopupVisible(false);
    };

  return (
    <section className={Styles.home}>
      <div className={Styles.homee}>
        <div className={Styles.homeContent}>
          <h2>AWARD WINNING</h2>
          <h1>DIGITAL SPARKLING AGENCY</h1>
          <p>
            Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
            Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed
            lacus nec risus finibus feugiat et fermentum
          </p>
          <div className={Styles.homeBtn}>
            <button onClick={handleButtonClick}>CONTACT US</button>
            {isPopupVisible && <Form onClose={handleClosePopup} />}
          </div>
        </div>
      </div>
      <div className={Styles.homeImg}>
        <img src="/images/bg1.png" alt="backgroundimage" />
      </div>
    </section>
  );
};

export default Home;
