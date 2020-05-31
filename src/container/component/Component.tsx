import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import TextClick from "../../component/textClick/TextClick";
import Navbar from "../../component/navbar/Navbar";

interface Props {}
const Component: React.FC<Props> = () => {
  const [Home, goHome] = useState(false);
  const [Aboutme, goAbout] = useState(false);

  if (Home === true) {
    return <Redirect to="/" />;
  }
  if (Aboutme === true) {
    return <Redirect to="/Aboutme" />;
  }
  return (
    <>
      <div>
        <TextClick
          testId="click-1"
          clickText="one test"
          textStyle={{
            color: "red",
            fontWeight: 400,
            fontSize: 15,
            cursor: "pointer",
          }}
          onTextClick={() => {
            goHome(true);
          }}
        />
        <Navbar
          testId="navbarmain-1"
          leftItem={{
            src: "src/assets/images/fred-logo.png",
            style: { width: "6rem", height: "3rem", borderRadius: 8 },
            onImageClick: () => goHome(true),
          }}
          rightItem={[
            <TextClick
              testId="click-1"
              clickText="Home"
              textStyle={{
                color: "red",
                fontWeight: 400,
                fontSize: 15,
              }}
              onTextClick={() => {
                goHome(true);
              }}
            />,
            <TextClick
              testId="click-2"
              clickText="About me"
              textStyle={{
                color: "red",
                fontWeight: 400,
                fontSize: 15,
              }}
              onTextClick={() => {
                goAbout(true);
              }}
            />,
            <TextClick
              testId="click-3"
              clickText="Contact"
              textStyle={{
                color: "red",
                fontWeight: 400,
                fontSize: 15,
              }}
              onTextClick={() => {
                goHome(true);
              }}
            />,
          ]}
        />
      </div>
    </>
  );
};
export default Component;
