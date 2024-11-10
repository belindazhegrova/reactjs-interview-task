import { Progress } from "antd";
import React from "react";

const Loader = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1300,
        width: "100%",
      }}
    >
      <Progress showInfo={false} />
    </div>
  );
};

export default Loader;
