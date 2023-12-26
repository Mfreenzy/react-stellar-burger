import React, { useState, useMemo } from "react";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerFullPrice.module.css";
import icon from "../../../images/icon36x36.svg";
import Modal from "../../Modal/Modal";
import OrderDetails from "../../OrderDetails/OrderDetails";
import { useAppSelector, useAppDispatch } from "../../../services/store";
import { clearCurrentIngredients } from "../../../services/actions/currentIngredientsActions";
import { resetOrder } from "../../../services/actions/orderAction";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../../../services/selectors/userSelector";
import { TIngredient } from "../../../types/types";


function BurgerFullPrice() {
  const ingredientsConstructor = useAppSelector(
    (store) =>  store.currentIngredients
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector(selectUser)
  const burgerInfill = ingredientsConstructor.other;
  const burgerBun = ingredientsConstructor.bun;
  const [fullPriceModal, setFullPriceModal] = useState(false);

  const handleOpenModal = () => {
    setFullPriceModal(true);
  };

  const handleCloseModal = () => {
    setFullPriceModal(false);
    dispatch(clearCurrentIngredients());
    dispatch(resetOrder());
  };

  const priceOfBurger = useMemo(() => {
    const priceOfBun = burgerBun?.price || 0;
    const priceOfFilling = burgerInfill.reduce(
      (acc: number, item: TIngredient) => acc + item.price,
      0
    );

    return priceOfBun * 2 + priceOfFilling;
  }, [burgerInfill, burgerBun]);

  const isButtonDisabled = useMemo(() => {
    return burgerInfill.length === 0 && !burgerBun;
  }, [burgerInfill, burgerBun]);

  return (
    <div>
      <div className={`${styles.fullPriceContainer} mt-10`}>
        <div className={`${styles.fullPrice}`}>
          <span className={"text text_type_digits-medium"}>
            {priceOfBurger}
          </span>
          <img src={icon} alt="" />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={() => {
            if (!user) {
              navigate("/login");
            } else {
              handleOpenModal();
            }
          }}
          disabled={isButtonDisabled}
        >
          Оформить заказ
        </Button>
      </div>
      {fullPriceModal && (
        <Modal closeModal={handleCloseModal} title={""}>
          <OrderDetails></OrderDetails>
        </Modal>
      )}
    </div>
  );
}

export default BurgerFullPrice;
