import React from "react";
import styles from "./CardList.module.css";
import Card from "./Card";
import PropTypes from "prop-types";

const CardList = React.forwardRef(({ name, data, id }, ref) => {
  return (
    <div className={styles.typePart}>
      <p ref={ref} id={id} className="text text_type_main-medium">
        {name}
      </p>
      <ul className={`${styles.cardList}`}>
        {data.map((item) => (
          <React.Fragment key={item._id}>
            <Card item={item} key={item._id} />
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
});

CardList.propTypes = {
  data: PropTypes.array.isRequired,

  handleOpenModal: PropTypes.func.isRequired,
};

export default CardList;
