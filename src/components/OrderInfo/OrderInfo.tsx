import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentOrder } from "../../services/actions/currentOrderActions";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useMemo } from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { useParams } from "react-router-dom";
import { allIngredientsArray } from "../../services/selectors/ingredientsSelectors";
import styles from "../OrderInfo/OrderInfo.module.css";
import { useLocation } from "react-router-dom";
import { TIngredient, TOrder } from "../../types/types";
import { DefaultRootState } from "../../services/store";



export default function OrderInfo() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { number } = useParams();

  console.log("location", location);
  console.log("number", number);

  const background = location.state?.background;
  const orderFinder = (number:string) => (store:DefaultRootState) => {
    let order;
    if (store.feed && store.feed.orders) {
      order = store.feed.orders.find((order:TOrder) => order.number === +number);
      if (order) {
        return order;
      }
    }
    if (store.profileFeed && store.profileFeed.orders) {
      order = store.profileFeed.orders.find(
        (order:TOrder) => order.number === +number
      );
      if (order) {
        return order;
      }
    }
    if (store.currentOrder && store.currentOrder.number && store.currentOrder.number.orders) {
        order = store.currentOrder.number.orders.find((order:TOrder) => order.number === +number)
        if (order) {
            return order
        }
    }
  };

  const order = useSelector(orderFinder(number!));

  console.log("order", order);

  const ingredients = useSelector(allIngredientsArray);

  console.log(ingredients);

  useEffect(() => {
    if (number !== undefined && !order) {
      dispatch(getCurrentOrder(+number));
    }
  }, [dispatch, order, number]);

  const orderIngredients = useMemo(
    () =>
      order?.ingredients.map((ingredientId:string) =>
        ingredients?.find((ingredient:TIngredient) => ingredientId === ingredient._id)
      ),
    [order?.ingredients, ingredients]
  );

  console.log("orderIngredients", orderIngredients);

  const multiply = (ingredient:TIngredient) => {
    let res = orderIngredients?.filter((item:TIngredient) => item._id === ingredient._id);
    return res.length;
  };

  const uniqueElements = (arr:TIngredient[]) =>
    arr?.filter((element, index:number) => index === arr.indexOf(element));

  const uniqueIngredients = uniqueElements(orderIngredients);

  const orderPrice = useMemo(
    () => orderIngredients?.reduce((acc:number, i:TIngredient) => acc + i.price, 0),
    [orderIngredients]
  );

  if (!order) {
    return null;
  }

  return (
    <div className={background ? styles.OrderInfoContainer : styles.OrderInfoPage}>
      <p className={background ? `${styles.OrderInfoNumber} text text_type_digits-default` : `${styles.Test} text text_type_digits-default`}>{`#${order.number}`}</p>
      <p className="text text_type_main-medium mt-10 mb-3">{order.name}</p>
      {order.status === "done" ? (
        <p
          className={`${styles.OrderInfoStatusDone} text text_type_main-default mb-15`}>
          {order.status === "done"
            ? "Выполнен"
            : order.status === "pending"
            ? "Готовится"
            : order.status === "created"
            ? "Создан"
            : null}
        </p>
      ) : (
        <p className="text text_type_main-default mb-15">
          {order.status === "done"
            ? "Выполнен"
            : order.status === "pending"
            ? "Готовится"
            : order.status === "created"
            ? "Создан"
            : null}
        </p>
      )}
      <p className="text text_type_main-medium mb-6">Состав:</p>
      <div className={`${styles.OrderInfoCards} custom-scroll`}>
        {uniqueIngredients?.map((ingredient:TIngredient) => (
          <div className={styles.OrderInfoCard} key={uuidv4()}>
            <div className={styles.OrderInfoCardinfo}>
              <div className={styles.OrderInfoImgbox}>
                <img
                  alt={ingredient.name}
                  src={ingredient.image}
                  className={styles.OrderInfoPicture}
                ></img>
              </div>
              <p className="text text_type_main-default">{ingredient.name}</p>
            </div>
            <div className={styles.OrderInfoPrice}>
              <p className="text text_type_digits-default pr-2">{`${multiply(
                ingredient
              )} х ${ingredient.price}`}</p>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        ))}
      </div>
      <div className={`${styles.OrderInfoTotalprice} pb-10`}>
        <p className="text text_type_main-default text_color_inactive">
          <FormattedDate date={new Date(order.createdAt)} />
        </p>
        <div className={styles.OrderInfoPrice}>
          <p className="text text_type_digits-default pr-2">{orderPrice}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
}
