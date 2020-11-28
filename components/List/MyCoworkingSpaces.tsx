import { Location } from '@/api/location';
import { gutters } from '@/utils';
import {
  Button,
  Card,
  Col,
  Empty,
  Image,
  Rate,
  Row,
  Spin,
  Typography,
} from 'antd';
import { FC } from 'react';

interface Props {
  items: Location[];
  loading?: boolean;
}

const MyCoworkingSpaces: FC<Props> = ({ items, loading }) => {
  if (loading) {
    return <Spin />;
  }
  return (
    <div style={{ padding: gutters.xxl }}>
      {items.length === 0 ? (
        <div className="flex justify-center items-center">
          <Empty />
        </div>
      ) : (
        <Row gutter={[24, 24]}>
          {items.map((item) => (
            <Col key={item.id} span={24}>
              <Card style={{ width: '100%' }}>
                <Row gutter={30}>
                  <Col span={10}>
                    <Image src={item.thumbnail} height={250} preview={false} />
                  </Col>
                  <Col span={14}>
                    <Typography.Title level={4} className="uppercase">
                      {item.name}
                    </Typography.Title>
                    <p>{item.address}</p>
                    <div
                      style={{
                        marginTop: gutters.lg,
                        marginBottom: gutters.lg,
                      }}
                    >
                      <Rate value={item.rating} />
                      <span style={{ marginLeft: gutters.lg }}>86 reviews</span>
                    </div>
                    <Button type="primary" size="large">
                      Edit my space
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

MyCoworkingSpaces.defaultProps = {
  items: [],
};

export default MyCoworkingSpaces;
