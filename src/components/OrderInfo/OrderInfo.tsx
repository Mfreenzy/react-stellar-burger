import React from "react";
import { useAppSelector, useAppDispatch } from "../../services/store";
import { getCurrentOrder } from "../../services/actions/currentOrderActions";
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
  const dispatch = useAppDispatch();
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
    if (store.currentOrder && store.currentOrder.number && store.currentOrder.orders) {
        order = store.currentOrder.orders.find((order:TOrder) => order.number === +number)
        if (order) {
            return order
        }
    }
  };

  const order = useAppSelector(orderFinder(number!));

  console.log("order", order);

  const ingredients = useAppSelector(allIngredientsArray);

  console.log(ingredients);

  useEffect(() => {
    if (number !== undefined && !order) {
      dispatch(getCurrentOrder(+number));
    }
  }, [dispatch, order, number]);

  const orderIngredients = useMemo(
    () =>
      order?.ingredients.map((ingredientId) =>
        ingredients?.find((ingredient) => ingredientId === ingredient._id)
      ),
    [order?.ingredients, ingredients]
  );

  console.log("orderIngredients", orderIngredients);

  const multiply = (ingredient:TIngredient) => {
    let res = orderIngredients?.filter((item) => item?._id === ingredient._id) || [];
  return res.length;
  };

  const uniqueElements = (arr: TIngredient[] | undefined) => {
    if (arr) {
      return arr.filter((element, index) => index === arr.indexOf(element));
    }
    return [];
  };

  const uniqueIngredients = uniqueElements(orderIngredients as TIngredient[]);

  const orderPrice = useMemo(
    () => orderIngredients ? orderIngredients.reduce((acc:number, i?:TIngredient) => i ? acc + i.price : acc, 0) : 0,
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
        {uniqueIngredients?.map((ingredient) => (
          <div className={styles.OrderInfoCard} key={ingredient._id}>
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
