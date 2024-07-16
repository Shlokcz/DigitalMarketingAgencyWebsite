import React from 'react';
import Styles from "./growth.module.css";

const boxes = [
    {
        src: "/images/heart.svg",
        num: "199+",
        para: "Satisfied Customers"
    },
    {
        src: "/images/clock (3).svg",
        num: "1591+",
        para: "Days Of Operation",
    },
    {
        src: "/images/Path 4402.svg",
        num: "283+",
        para: "Complete Project",
    },
    {
        src: "/images/Path 4406.svg",
        num: "75+",
        para: "Win Awards",
    },
]

const Growth = () => {
  return (
    <div className={Styles.growth}>
        <h3>EXPERTS GROWTH</h3>
        <h2>OUR COMPANY GROWTH</h2>
        <div className={Styles.boxes}>
            {boxes.map((item, index)=>(
                <div key={index} className={Styles.box}>
                    <img src={item.src} alt="growthImg" />
                    <h1>{item.num}</h1>
                    <p>{item.para}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Growth;