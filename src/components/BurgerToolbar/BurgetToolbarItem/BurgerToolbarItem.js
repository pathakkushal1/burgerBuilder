import React from "react";
import classes from "./BurgerToolbarItem.css";
import { useState } from "react";

const burgetToolbarItem = (props) => {
  let name = props.name;

  const [itemValue, itemValueChange] = useState({
    itemNumber: 0,
  });

  const dataChanger = (operation) => {
    let num = itemValue.itemNumber;

    switch (operation) {
      case "add":
        if (num < 5) {
          itemValueChange({
            itemNumber: num + 1,
          });
        } else {
          alert("You are adding it too much");
        }
        break;
      case "remove":
        if (num > 0) {
          itemValueChange({
            itemNumber: num - 1,
          });
        } else {
          alert("Values can not be in -ve");
        }
        break;
      default:
        itemValueChange({
          itemNumber: num,
        });
        break;
    }
  };

  const checkValue = (event) => {
    console.log("on change " + event.target.valu);

    if (event.target.value > 5) {
    }
  };

  return (
    <div className={classes.BurgerToolbarItem}>
      <label className={classes.Lable}>{name}</label>
      <input
        type="text"
        value={itemValue.itemNumber}
        id="num"
        onChange={(event) => checkValue(event)}
      />
      <button
        className={classes.Button}
        onClick={() => {
          props.addClick(name);
          dataChanger("add");
        }}
      >
        +
      </button>
      <button
        className={classes.Button}
        onClick={() => {
          props.removeClick(name);
          dataChanger("remove");
        }}
      >
        -
      </button>
    </div>
  );
};

export default burgetToolbarItem;
