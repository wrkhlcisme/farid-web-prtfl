import React from "react";
import classes from "./BackgroundFull.module.css";

interface Props {
  testId?: string;
  image?: string;
  children?: any;
}

const BackgroundFull: React.FC<Props> = ({ image, children, testId }) => {
  return (
    <div
      id={testId}
      className={classes.BackgroundSingleMain}
      style={{
        backgroundImage: `url(${image})`
      }}
    >
      <div className={classes.BackgroundSingleChild}>{children}</div>
    </div>
  );
};

export default BackgroundFull;
