import React, { CSSProperties, ReactNode } from "react";
import classes from "./Navbar.module.css";

interface Props {
  testId: string;
  leftItem: { src: string; style?: CSSProperties; onImageClick?: () => void };
  rightItem?: ReactNode[];
}

const Navbar: React.FC<Props> = ({ testId, leftItem, rightItem }) => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.leftContainer}>
        <img
          src={leftItem.src}
          style={leftItem.style}
          onClick={leftItem.onImageClick}
          alt="logo"
        />
      </div>
      <div className={classes.rightItemContainer}>
        {!!rightItem &&
          rightItem.map(
            (menu: ReactNode, index: string | number | undefined) => {
              return (
                <div key={index} className={classes.rightitem}>
                  {menu}
                </div>
              );
            }
          )}
      </div>
    </div>
  );
};

export default Navbar;
