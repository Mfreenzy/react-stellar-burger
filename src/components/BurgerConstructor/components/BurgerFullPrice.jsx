import React, { useState } from "react";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerFullPrice.module.css";
import icon from "../../../images/icon36x36.svg";
import Modal from "../../Modal/Modal";
import OrderDetails from "../../OrderDetails/OrderDetails";


function BurgerFullPrice() {
    const [fullPriceModal, setFullPriceModal] = useState(false);


    const handleOpenModal = () => {
        setFullPriceModal(true);
    }

    const handleCloseModal = () => {
        setFullPriceModal(false);
    }
    

    return (
        <div>
            <div className={`${styles.fullPriceContainer} mt-10`}>
                <div className={`${styles.fullPrice}`}>
                    <span className={"text text_type_digits-medium"}>610</span>
                    <img src={icon} alt="" />
                </div>
                <Button htmlType="button" type="primary" size="large" onClick={handleOpenModal}>
                    Оформить заказ
                </Button>
            </div>
            {fullPriceModal &&
                <Modal closeModal={handleCloseModal} title={""}>
                    <OrderDetails></OrderDetails>
                </Modal>}
        </div>
    );
}

export default BurgerFullPrice;
