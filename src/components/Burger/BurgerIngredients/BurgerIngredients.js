import React from "react";
import classes from "./BurgerIngredient.css";
import PropType from "prop-types";

const burgerIngredients = (props) => {
  let burgerI = null;
  switch (props.type) {
    case "BreadBottom":
      burgerI = <div className={classes.BreadBottom}></div>;
      break;

    case "BreadTop":
      burgerI = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
      break;
    case "Meat":
      burgerI = <div className={classes.Meat}></div>;
      break;
    case "Cheese":
      burgerI = <div className={classes.Cheese}></div>;
      break;
    case "Salad":
      burgerI = <div className={classes.Salad}></div>;
      break;
    case "Bacon":
      burgerI = <div className={classes.Bacon}></div>;
      break;
    default:
      burgerI = null;
      break;
  }
  return burgerI;
};

burgerIngredients.prototype = {
  type: PropType.string.isRequired,
};

export default burgerIngredients;
