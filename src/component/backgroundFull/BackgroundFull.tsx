import React from "react";
import classes from "./BackgroundFull.module.css";

interface Props {
  testId?: string;
  bgColor?: { top: string; bottom: string };
  children?: any;
}

const BackgroundFull: React.FC<Props> = ({ bgColor, children, testId }) => {
  return (
    <div
      id={testId}
      className={classes.BackgroundSingleMain}
      style={
        !!bgColor
          ? {
              background: `linear-gradient(180deg, ${bgColor.top} 0%, ${bgColor?.bottom} 100%)`,
            }
          : {}
      }
    >
      <div className={classes.BackgroundSingleChild}>{children}</div>
    </div>
  );
};

export default BackgroundFull;
