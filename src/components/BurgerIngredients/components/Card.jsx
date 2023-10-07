import React from "react";
import styles from "./CardList.module.css";
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { cardsPropType } from "../../../utils/prop-types";
import { SelectedComponentContext } from "../../../services/BurgerConsctructorContext";



function Card({ item, onClick }) {

    const { ingredientsConstructor, ingredientsConstructorDispatcher } = React.useContext(SelectedComponentContext);

    const checkCount = (item) => {  

        //устанавливаем счетчик как 0
          let count = 0
        
        //проверяем текущий элемент булочка? если да то =>
        
          if (item.type === "bun") {
            
            // в переменную счетчик ставим 1 если в хранилище в поле bun id совпадает с id текущего элемена 
            count = ingredientsConstructor.bun._id === item._id ? 2 : 0}
            
            //иначе если элемент не булочка, то =>
          else {
          // в переменную счетчик ставим длинну массива отфильтрованного по id текущего элемента. 
            count = ingredientsConstructor.other.filter((ingredient) => ingredient._id === item._id).length;
          }
            // возвращаем найденный счетчик 
          return count 
        }


    const handleClick = () => {
        if (item.type === "bun" && ingredientsConstructor.bun.length > 0) {
            console.log("Компонент типа bun уже выбран");
            return;
        }

        if (item.type === "bun") {
            ingredientsConstructorDispatcher({type: 'defBun', payload: item})
        } else {
            ingredientsConstructorDispatcher({type: 'addOther', payload: item})
        }
        
    };

    const handlePopupClick = () => {
        onClick()
    }

   

    return (
        <li className={`${styles.listElement}`}>
            {checkCount(item) !==0 && <Counter count={checkCount(item)} size="default"/>} 
            <img className={`${styles.cardPhoto}  pl-4 pb-4`} src={item.image} alt={item.name} onClick={() => handleClick(item)}></img>
            <div className={`${styles.currencyContainer}`}>
                <p className={`${styles.cardsPrice} pt-2 pb-2 pr-4 text text_type_digits-default`}>{item.price}</p>
                <CurrencyIcon />
            </div>
            <p className={`${styles.cardDescription} text text_type_main-default` } onClick={() => handlePopupClick(item)}>{item.name}</p>
        </li>
    );
}

Card.propTypes = cardsPropType;


export default Card;
