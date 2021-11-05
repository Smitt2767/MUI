import { Box } from "@mui/system";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          height: "100rem",
        }}
      ></Box>
    </>
  );
};

export default Home;
