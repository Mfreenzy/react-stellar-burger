import React, { useState } from "react";
import styles from "./CardList.module.css";
import Card from "./Card";
import PropTypes from "prop-types";

function CardList({ data, test, setTest, handleOpenModal }) {
    const [bun, setBun] = useState([]);

    return (
        <ul className={`${styles.cardList}`}>
            {data.map((item) => (
                <React.Fragment key={item._id}>
                    <Card item={item} test={test} setTest={setTest} bun={bun} setBun={setBun} onClick={() => handleOpenModal(item)} />
                </React.Fragment>
            ))}
        </ul>
    );
}

CardList.propTypes = {
    data: PropTypes.array.isRequired,
    test: PropTypes.array.isRequired,
    setTest: PropTypes.func.isRequired,
    handleOpenModal: PropTypes.func.isRequired,
};

export default CardList;
