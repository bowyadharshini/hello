import { Card, Space } from "antd";
import React from "react";

function Samplecard() {
  return (
    <Space direction="vertical" size={16}>
      <Card
        title=""
        extra={<a href="#">More</a>}
        style={{ width: 600, height: 400, background: "#555" }}
      >
        <p style={{ background: "#fff" }}>Card content</p>
        <p style={{ background: "#fff" }}>Card content</p>
        <p>Card content</p>
      </Card>
      {/* <Card
      size="small"
      title="Small size card"
      extra={<a href="#">More</a>}
      style={{ width: 300 }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card> */}
    </Space>
  );
}

export default Samplecard;
