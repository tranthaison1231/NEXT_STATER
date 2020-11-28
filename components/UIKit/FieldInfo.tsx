import { Space, Typography } from 'antd';
import React, { FC } from 'react';

interface Props {
  title: string;
  value: JSX.Element | string;
}

const FieldInfo: FC<Props> = ({ title, value }) => {
  return (
    <Space direction="vertical" size={0}>
      <Typography.Title level={5}>{title}</Typography.Title>
      <Typography.Text>{value}</Typography.Text>
    </Space>
  );
};

export default FieldInfo;
