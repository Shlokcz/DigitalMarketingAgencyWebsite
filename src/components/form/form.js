// src/FormPopup.js
import React, {useState} from "react";
import Styles from "./form.module.css";

const Form = ({ onClose }) => {

  const [agreed, setAgreed] = useState(false);

  const handleCheckboxChange = () => {
    setAgreed(!agreed);
  };

  return (
    <div className={Styles.popupOverlay}>
      <div className={Styles.popupContent}>
        <h2>Talk to us</h2>
        <form action="https://getform.io/f/aejylykb" method="POST">
          <div className={Styles.emailInput}>
            <input type="email" name="email" placeholder="Work email*" />
          </div>
          <div className={Styles.nameInput}>
            <input type="name" name="name" placeholder="First name*"></input>
            <input type="name" name="name" placeholder="Last name*"></input>
          </div>
          <div className={Styles.checkboxInput}>
            <input type="checkbox" checked={agreed} onChange={handleCheckboxChange}></input>
            <p>I agree to Fyle's terms and conditions,<br />and provide consent to send me communications</p>
          </div>
          <button type="submit">Contact us</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Form;
