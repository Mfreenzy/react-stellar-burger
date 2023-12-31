import React from "react";
import styles from "./OrderDetails.module.css";
import done from "../../images/done.svg";
import { useAppDispatch, useAppSelector } from "../../services/store";
import { getBurgerOrder } from "../../services/actions/orderAction";
import { TIngredient } from "../../types/types";

const OrderDetails = () => {
  // const [order, setOrder] = React.useState(null);
  // const [error, setError] = React.useState(null);
  const ingredientsConstructor = useAppSelector(
    (store) => store.currentIngredients
  );

  function getListIdIngredients() {
    const idBun = [ingredientsConstructor.bun?._id];
    const idOther = ingredientsConstructor.other?.map((item:TIngredient) => item._id);
    const ingrIDs = idBun.concat(idOther, idBun);
    return ingrIDs;
  }
  const componentsID = getListIdIngredients();

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const definedComponentsID = componentsID.filter((id): id is string => typeof id === "string");
    dispatch(getBurgerOrder(definedComponentsID));
  }, [dispatch]);

  const { orderNumber, orderRequest, orderFailed } = useAppSelector(
    (store) => store.order
  );

  console.log(orderRequest);
  console.log(orderFailed);
  console.log(orderNumber);

  if (orderRequest) {
    return <div className={`text text_type_main-default`}>Загрузка...</div>;
  } else {
    if (orderFailed) {
      return (
        <div className={`text text_type_main-default`}>Произошла ошибка</div>
      );
    }
    return (
      <section className={`${styles.orderDetails}`}>
        {orderNumber ? (
          <>
            <h2
              className={`${styles.orderTitle} text text_type_digits-large pt-10`}
            >
              {orderNumber}
            </h2>
            <p
              className={`${styles.orderNumber} text text_type_main-medium pt-8 pb-15`}
            >
              идентификатор заказа
            </p>
            <img className={`${styles.image}`} src={done} alt="WELL DONE!!!" />
            <p
              className={`${styles.orderStart} text text_type_main-default pt-15 pb-2`}
            >
              Ваш заказ начали готовить
            </p>
            <p
              className={`${styles.orderWait} text text_type_main-default pb-30`}
            >
              Дождитесь готовности на орбитальной станции
            </p>
          </>
        ) : (
          <p className={`text text_type_main-default`}>Отправка заказа...</p>
        )}
      </section>
    );
  }
};

export default OrderDetails;
