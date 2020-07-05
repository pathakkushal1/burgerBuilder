import React from "react";
import Aux from "../../hoc/Aux_";
const layout = (props) => {
  return (
    <Aux>
      <div>Title, Toolbar, navbar</div>
      <div>{props.children}</div>
    </Aux>
  );
};

export default layout;
