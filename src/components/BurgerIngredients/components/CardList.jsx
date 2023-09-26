import React from "react";
import styles from "./CardList.module.css";
import Card from "./Card";
import PropTypes from "prop-types";

function CardList({ data,  handleOpenModal }) {
    

    return (
        <ul className={`${styles.cardList}`}>
            {data.map((item) => (
                <React.Fragment key={item._id}>
                    <Card  item={item} onClick={() => handleOpenModal(item)} />
                </React.Fragment>
            ))}
        </ul>
    );
}

CardList.propTypes = {
    data: PropTypes.array.isRequired,
    
    handleOpenModal: PropTypes.func.isRequired,
};

export default CardList;
