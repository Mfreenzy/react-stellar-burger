import React, { useState } from "react";
import styles from "./CardList.module.css";
import Card from "./Card";

function CardList({ data, test, setTest, handleOpenModal }) {
    const [bun, setBun] = useState([]);

    return (
        <ul className={`${styles.cardList}`}>
            {data.map((item) => (
                <React.Fragment key={item._id}>
                    <Card item={item} test={test} setTest={setTest} bun={bun} setBun={setBun} onClick={() => handleOpenModal(item)}/>
                </React.Fragment>
            ))}
        </ul>
    );
}


export default CardList;
