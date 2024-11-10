import { Typography, Flex } from "antd";
import React from "react";

const Header = () => {
  return (
    <Flex
      style={{
        backgroundColor: "#1F2A44",
        height: "50px",
        paddingLeft: "20px",
      }}
      align="center"
    >
      <Typography
        style={{ color: "#ffffff", fontSize: "16px", fontWeight: 600 }}
      >
        Your Notes
      </Typography>
    </Flex>
  );
};

export default Header;
