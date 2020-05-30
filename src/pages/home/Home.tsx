import React from "react";
// import BackgroundFull from "../../component/backgroundFull/BackgroundFull";
import Navbar from "../../component/navbar/Navbar";
interface Props {}
const Home: React.FC<Props> = () => {
  return <Navbar leftIcon="faridaiman" rightButton={buttonText} />;
};
export default Home;
