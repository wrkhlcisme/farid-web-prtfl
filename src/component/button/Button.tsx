import React from "react";
import Classes from "./Button.module.css";
interface Props {
  testId: string;
  buttonName: string;
  buttonColor?: { top: string; bottom: string };
  onClickButton?: () => void;
  width?: string;
}
const Button: React.FC<Props> = ({
  testId,
  buttonName,
  buttonColor,
  onClickButton,
  width,
}) => {
  return (
    <div className={Classes.Button} id={testId} onClick={onClickButton}>
      <button
        className={Classes.buttonStyle}
        style={
          !!buttonColor
            ? {
                background: `linear-gradient(180deg, ${buttonColor.top} 0%, ${buttonColor?.bottom} 100%)`,
              }
            : {}
        }
      >
        {buttonName}
      </button>
    </div>
  );
};

export default Button;
