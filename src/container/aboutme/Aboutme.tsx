import React, { useState } from "react";
import BackgroundFull from "../../component/backgroundFull/BackgroundFull";
import { Redirect } from "react-router-dom";
import Navbar from "../../component/navbar/Navbar";
import TextClick from "../../component/textClick/TextClick";
import TextContent from "../../component/textContent/TextContent";
import Paragraph from "../../component/typography";
const { B_100_BLACK } = Paragraph;

interface Props {}
const Aboutme: React.FC<Props> = () => {
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
      <BackgroundFull
        testId="background-1"
        bgColor={{ top: "#FFFFFF", bottom: "#03524c" }}
      >
        <div style={{ padding: 100 }}>
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
                // textStyle={{
                //   color: "red",
                //   fontWeight: 400,
                //   fontSize: 15,
                // }}
                onTextClick={() => {
                  goHome(true);
                }}
              />,
              <TextClick
                testId="click-2"
                clickText="About"
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
          <div style={{ paddingTop: 200 }}>
            <TextContent
              testId="content-1"
              contentStyle={{ textAlign: "center" }}
              children={
                <>
                  <B_100_BLACK>About Me</B_100_BLACK>
                </>
              }
            />
          </div>
        </div>
      </BackgroundFull>
    </>
  );
};
export default Aboutme;
