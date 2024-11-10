import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const SearchBar = () => {
  return (
    <Input
      placeholder="Search..."
      //   onSearch={onSearch}
      prefix={<SearchOutlined style={{ fontSize: "18px" }} />}
      style={{ width: 252 }}
    />
  );
};

export default SearchBar;
