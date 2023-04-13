import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Col, Drawer, Row, Button, Input } from "antd";
function GridAntd() {
  return (
    <div>
      <Input placeholder="default size" prefix={<UserOutlined />} />
      <Drawer style={{ background: "green", border: "20px solid green" }}>
        I am tree gride
      </Drawer>
      <p style={{ background: "red" }}>Grid is an here</p>
      <Row>
        <Col span={8} style={{ background: "#a88" }}>
          rat
        </Col>
        <Col span={8} style={{ background: "#555" }}>
          {" "}
          rat
        </Col>
        <Col span={8} style={{ background: "#448" }}>
          {" "}
          rat
        </Col>
      </Row>
    </div>
  );
}

export default GridAntd;
