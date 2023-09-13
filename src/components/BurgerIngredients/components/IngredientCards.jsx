import React, { useState } from "react";
import styles from "./ingredientCards.module.css";
import IngredientsTabs from "./IngredientTabs";
import CardList from "./CardList";
import Modal from "../../Modal/Modal";
import IngredientDetail from "../../IngredientDetails/IngredientDetail";



const IngredientCards = ({ingredients}) => {
    const buns = ingredients.filter((item) => item.type === "bun");
    const mains = ingredients.filter((item) => item.type === "main");
    const sauces = ingredients.filter((item) => item.type === "sauce");

    const [test, setTest] = useState([]);
    const [visible, setVisible] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleOpenModal = (item) => {
        setSelectedCard(item);
        setVisible(true);
    }

    const handleCloseModal = () => {
        setVisible(false);
    }

    return (
        <>
            <IngredientsTabs />
            <div className={`${styles.ingredientsScroll} custom-scroll`}>
                <div id="buns" className={`${styles.cardContainer}`}>
                    <h2 className={`text text_type_main-medium pb-6`}>Булочки</h2>
                    <CardList data={buns} test={test} setTest={setTest} handleOpenModal={handleOpenModal}/>
                </div>
                <div id="sauces" className={`${styles.cardContainer}`}>
                    <h2 className={`text text_type_main-medium pt-10 pb-6`}>Соусы</h2>
                    <CardList data={sauces} test={test} setTest={setTest} handleOpenModal={handleOpenModal}/>
                </div>
                <div id="main" className={`${styles.cardContainer}`}>
                    <h2 className={`text text_type_main-medium pt-10 pb-6`}>Начинки</h2>
                    <CardList data={mains} test={test} setTest={setTest} handleOpenModal={handleOpenModal}/>
                </div>
            </div>
            {visible &&
            <Modal title={"Детали ингредиентов"} closeModal={handleCloseModal} >

                <IngredientDetail data={selectedCard}></IngredientDetail>
            </Modal>}
        </>
    );
};



export default IngredientCards;
