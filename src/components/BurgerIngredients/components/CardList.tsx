import React, {ForwardedRef} from "react";
import styles from "./CardList.module.css";
import Card from "./Card";
import { checkString } from "../../../utils/prop-types";
import { TCardListElement } from "../../../types/types";

const CardList = React.forwardRef(
  ({ data, id, handleOpenModal } : TCardListElement, ref: ForwardedRef<HTMLParagraphElement>) => {
    return (
      <div className={styles.typePart}>
        <p ref={ref} id={id} className="text text_type_main-medium"></p>
        <ul className={`${styles.cardList}`}>
          {data.map((item, index) => (
            <React.Fragment key={item._id}>
              <Card
                {...{ item }}  // Spread the item properties
                key={item._id}
                _id={item._id}
                index={index}
                onClick={() => handleOpenModal(item)}
              />
            </React.Fragment>
          ))}
        </ul>
      </div>
    );
  }
);


export default CardList;
