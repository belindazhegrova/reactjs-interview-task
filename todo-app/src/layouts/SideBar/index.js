import React from "react";
import { Col, Flex, Typography } from "antd";
import {
  FolderFilled,
  CaretDownFilled,
  CaretRightFilled,
} from "@ant-design/icons";

const SideBar = ({
  isCategoryHover,
  setCategoryHover,
  isCategorySelected,
  setCategorySelected,
}) => {
  return (
    <Col className="main">
      <Col
        onClick={() => setCategorySelected(!isCategorySelected)}
        onMouseEnter={() => setCategoryHover(!isCategoryHover)}
        onMouseLeave={() => setCategoryHover(isCategoryHover)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor:
            isCategoryHover || isCategorySelected ? "#e6e7e7" : "#1264a3",
          borderRadius: "5px",
          width: "350px",
          height: "42px",
          marginBottom: "10px",
          padding: "0px 15px",
          transition: "background-color 0.3s",
        }}
      >
        <Flex gap="small" align="start">
          <FolderFilled
            style={{
              color:
                isCategoryHover || isCategorySelected ? "#323338" : "#ffffff",
              fontSize: "24px",
              transition: "color 0.3s",
            }}
          />
          <Typography
            style={{
              color:
                isCategoryHover || isCategorySelected ? "#323338" : "#ffffff",
              transition: "color 0.3s",
            }}
          >
            testtt
          </Typography>
        </Flex>
        {isCategorySelected ? (
          <CaretRightFilled
            style={{
              color: "#323338",
              fontSize: "18px",
              transition: "color 0.3s",
            }}
          />
        ) : (
          <CaretDownFilled
            style={{
              color:
                isCategoryHover || isCategorySelected ? "#323338" : "#ffffff",
              fontSize: "18px",
              transition: "color 0.3s",
            }}
          />
        )}
      </Col>
      <Col
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#1264a3",
          borderRadius: "5px",
          width: "350px",
          height: "42px",
          marginBottom: "10px",
          padding: "0px 15px 0px 15px",
        }}
      >
        <Typography>testtt</Typography>
        <Typography>icon</Typography>
      </Col>
      <Col
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#1264a3 ",
          borderRadius: "5px",
          width: "350px",
          height: "42px",
          marginBottom: "10px",
          padding: "0px 15px 0px 15px",
        }}
      >
        <Typography>testtt</Typography>
        <Typography>icon</Typography>
      </Col>
    </Col>
  );
};

export default SideBar;
