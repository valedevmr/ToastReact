import React from "react";
import { ButtonProps } from "../types/ButtonProps";

const Button = ({ props,onclick }: ButtonProps) => {
  return (
    <button
      className={` button is-${props.bg} has-text-${props.color} has-text-centered box has-radius-small`}
      style={{ width: "80%", display:"inline-block"  , height:"6vh"}}
      name={props.txt}
      onClick={onclick}
    >
      {props.txt.toUpperCase()}
    </button>
  );
};

export default Button;
