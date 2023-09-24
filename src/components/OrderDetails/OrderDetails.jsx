import React from "react";
import styles from "./OrderDetails.module.css";
import done from "../../images/done.svg"

const OrderDetails = () => {
    return (
        <section className={`${styles.orderDetails}`}>
            <h2 className={`${styles.orderTitle} text text_type_digits-large pt-10`}>034536</h2>
            <p className={`${styles.orderNumber} text text_type_main-medium pt-8 pb-15`}>идентификатор заказа</p>
            <img className={`${styles.image}`} src={done} alt="WELL DONE!!!"/>
            <p className={`${styles.orderStart} text text_type_main-default pt-15 pb-2`}>Ваш заказ начали готовить</p>
            <p className={`${styles.orderWait} text text_type_main-default pb-30`}>Дождитесь готовности на орбитальной станции</p>
        </section>
    );
};

export default OrderDetails