import React, { useState } from "react";
import { Col, Row, Flex, List } from "antd";
import CustomButton from "../components/CustomButton";
import SearchBar from "../components/SearchBar";
import SideBar from "../layouts/SideBar";

const Main = () => {
  const [isCategorySelected, setCategorySelected] = useState(false);
  const [isCategoryHover, setCategoryHover] = useState(false);

  const data = Array.from({ length: 20 }, (_, index) => ({
    title: `Ant Design Title ${index + 1}`,
    description: `This is the description for Ant Design Title ${
      index + 1
    }. Ant Design, a design language for background applications, is refined by Ant UED Team.`,
  }));

  return (
    <Row>
      <Col span={7}>
        <SideBar
          isCategoryHover={isCategoryHover}
          setCategoryHover={setCategoryHover}
          isCategorySelected={isCategorySelected}
          setCategorySelected={setCategorySelected}
        />
      </Col>

      <Col span={17}>
        <Col className="main">
          <Flex gap="middle" align="start">
            <CustomButton />
            <SearchBar />
          </Flex>
          <Col
            style={{
              overflowY: "auto",
              maxHeight: "90vh",
            }}
          >
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    title={item.title}
                    description={item.description}
                  />
                </List.Item>
              )}
            />
          </Col>
        </Col>
      </Col>
    </Row>
  );
};

export default Main;
