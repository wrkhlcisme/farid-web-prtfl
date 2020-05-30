import React, { ReactNode } from "react";
import classes from "Navbar.module.css";

interface Props {
  leftIcon?: any;
  rightButton?: any;
}

const Navbar: React.FC<Props> = ({ leftIcon, rightButton }) => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.leftContainer}></div>
      <div className={classes.rightContainer}>
        {!!rightButton &&
          rightButton.map(
            (textButton: ReactNode, index: string | number | undefined) => {
              return (
                <div className={classes.rightContainerComponent}>
                  {textButton}
                </div>
              );
            }
          )}
      </div>
    </div>
  );
};

export default Navbar;
