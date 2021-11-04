import React from "react";
import { useTheme } from "@emotion/react";

const Home = () => {
  const theme = useTheme();
  console.log(theme);
  return <div>home</div>;
};

export default Home;
