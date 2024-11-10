import React from "react";
import { Button, Divider } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const CustomButton = () => {
  return (
    <Button
      type="primary"
      style={{
        width: "218px",
        height: "32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "5px",
        backgroundColor: "#71cf48",
      }}
    >
      <span style={{ flex: 1, textAlign: "center" }}>Create Note</span>
      <span style={{ display: "flex", alignItems: "center" }}>
        <Divider
          type="vertical"
          style={{
            height: "32px",
          }}
        />
        <PlusOutlined style={{ fontSize: "18px" }} />
      </span>
    </Button>
  );
};

export default CustomButton;
