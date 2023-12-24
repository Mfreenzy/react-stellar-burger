import React , { useRef, RefObject } from "react";
import styles from "./BurgerConstTotal.module.css";
import {
  CurrencyIcon,
  DeleteIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useAppDispatch, useAppSelector } from "../../../services/store";
import { removeCurrentIngredient } from "../../../services/actions/currentIngredientsActions";
import { useDrag, useDrop } from "react-dnd";
import { TIngredient } from "../../../types/types";
import { TFillingElement } from "../../../types/types";


export function BurgerConstCard({
  moveCard,
  index,
  id,
  item,
}: TFillingElement) {
  const ingredientsConstructor = useAppSelector(
    (store) => store.currentIngredients
  );
  const burgerInfill = ingredientsConstructor.other;
  const dispatch = useAppDispatch();

  function deleteCard(item:TIngredient) {
    // вызов действия, которое будет удалять элемент из состояния
    dispatch(removeCurrentIngredient(item));
  }

  const ref: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const [{ handlerId }, drop] = useDrop({
    accept: "item",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: TFillingElement, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // If `clientOffset` is `null`, exit the function
      if (!clientOffset) {
        return;
      }
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex, burgerInfill);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: "item",
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <div ref={ref} data-handler-id={handlerId} style={{ ...styles, opacity }}>
      <li className={`${styles.totalContainer} mt-4 mb-4`}>
        <DragIcon type="primary" />
        <div className={`${styles.elementTotal} pt-4 pr-6 pb-4 pl-6`}>
          <img src={item.image} alt="" className={`${styles.elementImage}`} />
          <span
            className={`${styles.elementTitle} text text_type_main-default mr-5`}
          >
            {item.name}
          </span>
          <div className={`${styles.containerPrice} mr-4`}>
            <span
              className={`${styles.elementPrice} text text_type_digits-default`}
            >
              {item.price}
            </span>
            <CurrencyIcon type="primary" />
          </div>
          <DeleteIcon type="primary" onClick={() => deleteCard(item)} />
        </div>
      </li>
    </div>
  );
}


