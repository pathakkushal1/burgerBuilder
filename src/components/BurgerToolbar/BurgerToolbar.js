import React from "react";
import BurgerToolbarItem from "./BurgetToolbarItem/BurgerToolbarItem";

const burgetLayout = (props) => {
  let items = null;
  items = props.items.map((item) => {
    return (
      <BurgerToolbarItem
        key={item.name}
        name={item.name}
        addClick={props.addHandler}
        removeClick={props.removeHandler}
        value={item.value}
      />
    );
  });
  return items;
};

export default burgetLayout;
