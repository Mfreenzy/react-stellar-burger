import React from "react";
import styles from "../TotalBurgerInfo/TotalBurgerInfo.module.css";
import { useAppSelector } from "../../services/store";
import { TOrder } from "../../types/types";



function TotalBurgerInfo() {
  const { orders, total, totalToday } = useAppSelector((store) => store.feed);
  const CompletedOrders = orders.filter((i:TOrder) => i.status === "done");
  const ProcessingOrders = orders.filter((i: TOrder) => i.status !== "done");
  console.log(CompletedOrders);
  console.log(ProcessingOrders);

  return (
    <>
      <div className={`${styles.TBIStatus}`}>
        <section>
          <p className="text text_type_main-medium pb-6">Приготовлены:</p>
          <ul className={`${styles.TBIListColor}`}>
            {CompletedOrders.map((order:TOrder, index:number) => {
              if (index < 50) {
                return (
                  <li className={`${styles.TBIDigits}`} key={order._id}>
                    <p
                      key={order._id}
                      className="text text_type_digits-default"
                    >
                      {order.number}
                    </p>
                  </li>
                );
              }
            })}
          </ul>
        </section>

        <section>
          <p className="text text_type_main-medium pb-6">В работе:</p>
          <ul className={`${styles.TBIList}`}>
            {ProcessingOrders.map((order:TOrder, index:number) => {
              if (index < 30) {
                return (
                  <li className={`${styles.TBIDigits}`} key={order._id}>
                    <p
                      key={order._id}
                      className="text text_type_digits-default"
                    >
                      {order.number}
                    </p>
                  </li>
                );
              }
            })}
          </ul>
        </section>
      </div>
      <p className="text text_type_main-medium">Выполнено за все время:</p>
      <p className="text text_type_digits-large pb-15">{total}</p>
      <p className="text text_type_main-medium">Выполнено за сегодня:</p>
      <p className="text text_type_digits-large pb-15">{totalToday}</p>
    </>
  );
}

export default TotalBurgerInfo;
