import React, { useState, useMemo } from "react";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerFullPrice.module.css";
import icon from "../../../images/icon36x36.svg";
import Modal from "../../Modal/Modal";
import OrderDetails from "../../OrderDetails/OrderDetails";
import { SelectedComponentContext } from "../../../services/BurgerConsctructorContext";


function BurgerFullPrice() {
    const {ingredientsConstructor} = React.useContext(SelectedComponentContext);
    const burgerInfill = ingredientsConstructor.other;
    const burgerBun = ingredientsConstructor.bun;
    const [fullPriceModal, setFullPriceModal] = useState(false);


    const handleOpenModal = () => {
        setFullPriceModal(true);
    }

    const handleCloseModal = () => {
        setFullPriceModal(false);
    }
    
    const priceOfBurger = useMemo(() => {
        const priceOfBun = burgerBun?.price || 0;
        const priceOfFilling = burgerInfill.reduce((acc, item) => acc + item.price, 0);
    
        return priceOfBun * 2 + priceOfFilling;
      }, [burgerInfill, burgerBun]);


    return (
        <div>
            <div className={`${styles.fullPriceContainer} mt-10`}>
                <div className={`${styles.fullPrice}`}>
                    <span className={"text text_type_digits-medium"}>{priceOfBurger}</span>
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
