import React from "react";
import classes from "./Burger.css";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
const burger = (props) => {
  let BurgerCom = null;
  BurgerCom = props.types.map((burgerType) => {
    return (
      <BurgerIngredients
        type={burgerType}
        key={burgerType + Math.random(5000)}
      />
    );
  });
  return <div className={classes.Burger}>{BurgerCom}</div>;
};

export default burger;
