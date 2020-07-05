import React, { Component } from "react";

import Aux from "./hoc/Aux_";
import Layout from "./components/Layout/Layout";
import Burger from "./components/Burger/Burger";
import BurgetToolbar from "./components/BurgerToolbar/BurgerToolbar";

class App extends Component {
  state = {
    burgerLayer: ["BreadTop", "BreadBottom"],
  };
  items = [
    {
      name: "Salad",
    },
    {
      name: "Cheese",
    },
    {
      name: "Meat",
    },
    {
      name: "Bacon",
    },
  ];

  addHandler = () => {
    console.log("you werre here");
  };

  addItemHandler = (item) => {
    let burgerLayerNew = [...this.state.burgerLayer];
    burgerLayerNew.pop();
    burgerLayerNew.push(item);
    burgerLayerNew.push("BreadBottom");
    this.setState({ burgerLayer: burgerLayerNew });
  };

  removeItemHandler = (itemName) => {
    let burgerLayerNew = [...this.state.burgerLayer];
    burgerLayerNew.reverse();
    const index = burgerLayerNew.findIndex((item) => {
      return item === itemName;
    });
    if (index > -1) {
      burgerLayerNew.splice(index, 1);
      burgerLayerNew.reverse();
      this.setState({ burgerLayer: burgerLayerNew });
    }
  };

  render() {
    return (
      <Aux>
        <Layout>We are starting from here</Layout>
        <Burger types={this.state.burgerLayer} />
        <BurgetToolbar
          items={this.items}
          addHandler={this.addItemHandler}
          removeHandler={this.removeItemHandler}
        />
      </Aux>
    );
  }
}

export default App;
