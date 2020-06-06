import React, { CSSProperties } from "react";
import classes from "./TextClick.module.css";

interface Props {
  testId: string;
  clickText: string;
  textStyle?: CSSProperties;
  onTextClick: (testId: string) => void;
}
const TextClick: React.FC<Props> = ({
  testId,
  clickText,
  textStyle,
  onTextClick,
}) => {
  return (
    <div style={{ width: "100%" }}>
      <p
        className={classes.textClickMain}
        id={testId}
        onClick={() => {
          onTextClick(testId!);
        }}
        style={!!textStyle ? textStyle : {}}
      >
        {clickText}
      </p>
    </div>
  );
};
export default TextClick;
