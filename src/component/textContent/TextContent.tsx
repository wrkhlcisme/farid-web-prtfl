import React, { CSSProperties, ReactNode } from "react";
import classes from "./TextContent.module.css";

interface Props {
  testId: string;
  contentStyle: CSSProperties;
  children: ReactNode;
}
const TextContent: React.FC<Props> = ({ testId, contentStyle, children }) => {
  return (
    <div
      className={classes.contentContainer}
      id={testId}
      style={!!contentStyle ? contentStyle : {}}
    >
      {children}
    </div>
  );
};

export default TextContent;
