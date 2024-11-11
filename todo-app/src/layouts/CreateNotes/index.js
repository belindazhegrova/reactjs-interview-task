import { Col, Divider, Input } from "antd";
import React from "react";

const { TextArea } = Input;

const CreateNotes = () => {
  return (
    <Col className="main">
      <Input variant="borderless" placeholder="Add your title" />
      <Divider style={{ margin: "0px" }} />
      <TextArea
        variant="borderless"
        placeholder="Write your note here..."
        style={{ flexGrow: 1 }}
      />
    </Col>
  );
};

export default CreateNotes;
