import React from "react";
import styles from "../Feed/Feed.module.css";
import TotalBurgerInfo from "../../components/TotalBurgerInfo/TotalBurgerInfo";
import { tConnect, tDisconnect } from "../../services/actions/feedActions";
import Order from "../../components/Order/Order";
import { useLocation, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../services/store";
import { useEffect } from "react";
import { TOrder } from "../../types/types";


function Feed() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const ALL_ORDERS_URL: string = "wss://norma.nomoreparties.space/orders/all";

  useEffect(() => {
    dispatch(tConnect(ALL_ORDERS_URL));
    return () => {
      dispatch(tDisconnect(ALL_ORDERS_URL));
    };
  }, [dispatch]);

  const { isLoading, error, orders } = useAppSelector((store) => store.feed);

  return (
    <div className={`${styles.feedContainer}`}>
      <h1 className={`${styles.feedHeader} text text_type_main-large pb-5`}>
        Лента заказов
      </h1>
      <main className={`${styles.feedMain} `}>
        <section className={`${styles.feedOrder} pb-10 custom-scroll`}>
          {isLoading && "Загрузка..."}
          {error && "Произошла ошибка"}
          {!isLoading &&
            !error &&
            orders !== null &&
            orders.map((order:TOrder) => (
              <Link
                className={styles.feedLink}
                key={order.number}
                to={`/feed/${order.number}`}
                state={{ background: location }}
              >
                <Order key={order._id} order={order} />
              </Link>
            ))}
        </section>

        <section className={`${styles.feedTotal} pb-10`}>
          {isLoading && "Загрузка..."}
          {error && "Произошла ошибка"}
          {!isLoading && !error && orders !== null && <TotalBurgerInfo />}
        </section>
      </main>
    </div>
  );
}

export default Feed;
