import React from "react";
import styles from "./CardList.module.css";
import Card from "./Card";
import PropTypes from "prop-types";
import { checkString } from "../../../utils/prop-types";

const CardList = React.forwardRef(
  ({ data, id, handleOpenModal }, ref) => {
    return (
      <div className={styles.typePart}>
        <p ref={ref} id={id} className="text text_type_main-medium"></p>
        <ul className={`${styles.cardList}`}>
          {data.map((item) => (
            <React.Fragment key={item._id}>
              <Card
                item={item}
                key={item._id}
                onClick={() => handleOpenModal(item)}
              />
            </React.Fragment>
          ))}
        </ul>
      </div>
    );
  }
);

CardList.propTypes = {
  data: PropTypes.array.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
  id: checkString,
};

export default CardList;
