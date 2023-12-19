import React, { useState, useRef, ForwardedRef } from "react";
import styles from "./ingredientCards.module.css";
import CardList from "./CardList";
import Modal from "../../Modal/Modal";
import IngredientDetail from "../../IngredientDetails/IngredientDetail";
import { useDispatch, useSelector } from "react-redux";
import {
  setIngredientDetails,
  clearIngredientDetails,
} from "../../../services/actions/currentIngredientActions";
import stylesTab from "../components/IngredientTabs.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { DefaultRootState } from "../../../services/store";
import { TIngredient } from "../../../types/types";

const IngredientCards = () => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const handleOpenModal = (ingredient:TIngredient) => {
    dispatch(setIngredientDetails(ingredient));
    setVisible(true);
  };

  const handleCloseModal = () => {
    dispatch(clearIngredientDetails());
    setVisible(false);
  };

  const setTab = (tab: string) => {
    setCurrentTab(tab);
    const element = document.getElementById(tab);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { ingredients } = useSelector((store:DefaultRootState) => store.allIngredients);
  const filtered = (type:string) => {
    return ingredients.filter((item:TIngredient) => item.type === type);
  };

  const [filteredIngredients, setFilteredIngredients] = React.useState({
    buns: [],
    sauces: [],
    mains: [],
  });

  React.useMemo(
    () =>
      setFilteredIngredients({
        buns: filtered("bun"),
        sauces: filtered("sauce"),
        mains: filtered("main"),
      }),
    [ingredients]
  );

  const [currentTab, setCurrentTab] = React.useState("buns");
  const tabsRef = useRef<HTMLParagraphElement>(null);
  const mainsRef = useRef<HTMLParagraphElement>(null);
  const bunsRef = useRef<HTMLParagraphElement>(null);
  const saucesRef = useRef<HTMLParagraphElement>(null);

  function handleScrollList() {
    const tabsBottom = tabsRef.current?.getBoundingClientRect().bottom;
    const bunsTop = bunsRef.current?.getBoundingClientRect().top;
    const saucesTop = saucesRef.current?.getBoundingClientRect().top;

    const mainsTop = mainsRef.current?.getBoundingClientRect().top;

    if (!tabsBottom || !bunsTop || !saucesTop || !mainsTop) {
      return;
    }

    const TabsWithBottomPadding = tabsBottom + 40;
    const bunsDelta = Math.abs(bunsTop - TabsWithBottomPadding);
    const saucesDelta = Math.abs(saucesTop - TabsWithBottomPadding);
    const mainsDelta = Math.abs(mainsTop - TabsWithBottomPadding);
    const min = Math.min(bunsDelta, saucesDelta, mainsDelta);
    const tab =
      min === bunsDelta ? "buns" : min === saucesDelta ? "sauces" : "main";
    if (tab !== currentTab) {
      setCurrentTab(tab);
    }
  }

  return (
    <>
      <div className={`${stylesTab.ingredientsContainer} mb-10`} ref={tabsRef}>
        <h2 className={`text text_type_main-large pt-10 pb-5`}>
          Соберите бургер
        </h2>
        <div className={`${stylesTab.tabsContainer}`}>
          <Tab value="buns" active={currentTab === "buns"} onClick={setTab}>
            Булочки
          </Tab>
          <Tab value="sauces" active={currentTab === "sauces"} onClick={setTab}>
            Соусы
          </Tab>
          <Tab value="main" active={currentTab === "main"} onClick={setTab}>
            Начинки
          </Tab>
        </div>
      </div>
      <div
        className={`${styles.ingredientsScroll} custom-scroll`}
        onScroll={handleScrollList}
      >
        <div className={`${styles.cardContainer}`}>
          <h2 className={`text text_type_main-medium pb-6`}>Булочки</h2>
          <CardList
            data={filteredIngredients.buns}
            ref={bunsRef}
            id="buns"
            handleOpenModal={handleOpenModal}
          />
        </div>
        <div className={`${styles.cardContainer}`}>
          <h2 className={`text text_type_main-medium pt-10 pb-6`}>Соусы</h2>
          <CardList
            data={filteredIngredients.sauces}
            ref={saucesRef}
            id="sauces"
            handleOpenModal={handleOpenModal}
          />
        </div>
        <div className={`${styles.cardContainer}`}>
          <h2 className={`text text_type_main-medium pt-10 pb-6`}>Начинки</h2>
          <CardList
            data={filteredIngredients.mains}
            ref={mainsRef}
            id="main"
            handleOpenModal={handleOpenModal}
          />
        </div>
      </div>
    </>
  );
};

export default IngredientCards;
