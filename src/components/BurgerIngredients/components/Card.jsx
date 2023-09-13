import React from "react";
import styles from "./CardList.module.css";
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";




function Card({ item, setTest, test, bun, setBun, onClick }) {
    
    const num = item === bun[0] ? 1 : 0;
    console.log(num);

    const handleClick = () => {
        if (item.type === "bun") {
            setBun([item]);
        } else {
            setTest([...test.concat(item)]);
        }
        
    };

    const handlePopupClick = () => {
        onClick()
    }

    function isNum(num) {
        return num !== 0;
    }

    return (
        <li className={`${styles.listElement}`}>
            {isNum(num) && <Counter count={num} size="default" />}
            <img className={`${styles.cardPhoto}  pl-4 pb-4`} src={item.image} alt={item.name} onClick={() => handleClick(item)}></img>
            <div className={`${styles.currencyContainer}`}>
                <p className={`${styles.cardsPrice} pt-2 pb-2 pr-4 text text_type_digits-default`}>{item.price}</p>
                <CurrencyIcon />
            </div>
            <p className={`${styles.cardDescription} text text_type_main-default` } onClick={() => handlePopupClick(item)}>{item.name}</p>
        </li>
    );
}




export default Card;
