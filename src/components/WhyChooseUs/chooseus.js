import React from 'react';
import Styles from "./chooseus.module.css";

const content = [
    {
        src: "/images/target.svg",
        heading: "Clarified Vision & Target",
        para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, id alias!"
    },
    {
        src: "/images/meter.svg",
        heading: "Clarified Vision & Target",
        para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, id alias!"
    },
    {
        src: "/images/privacylock.svg",
        heading: "Clarified Vision & Target",
        para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, id alias!"
    },
    {
        src: "/images/4.svg",
        heading: "Clarified Vision & Target",
        para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, id alias!"
    }
];

const Chooseus = () => {
  return (
    <div className={Styles.chooseus}>
        <h3>WHY CHOOSE US</h3>
        <h2>WHY WE ARE BEST</h2>
        <div className={Styles.content}>
            {content.map((item, index)=>(
                <div key={index} className={Styles.things}>
                    <img src={item.src} alt="items" />
                    <h3>{item.heading}</h3>
                    <p>{item.para}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Chooseus;