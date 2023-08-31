import { ComponentPropsWithoutRef, FunctionComponent } from "react";

import "../../style/ui/buttons.css";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  btnText: string;
}

const Button: FunctionComponent<ButtonProps> = ({ btnText, ...props }) => {
  return (
    <button className="uppercase-text base-button dark-button" {...props}>
      {btnText}
    </button>
  );
};

export default Button;
