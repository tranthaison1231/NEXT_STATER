import { Col, Row } from 'antd';
import React, { FC } from 'react';

interface Props {
  title: React.ReactNode;
  value: React.ReactNode;
  style?: React.CSSProperties;
}

const Field: FC<Props> = ({ title, value, style }) => {
  return (
    <Row justify="center" align="middle" style={style}>
      <Col span={2}>{title}</Col>
      <Col span={22}>{value}</Col>
    </Row>
  );
};
export default Field;
