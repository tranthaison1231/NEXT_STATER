import { gutters } from '@/utils';
import { Card, Col, Empty, Image, Pagination, Rate, Row, Spin } from 'antd';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { Location } from '@/api/location';

interface Props {
  items: Location[];
  total: number;
  loading?: boolean;
}

const CoworkingSpaces: FC<Props> = ({ items, total, loading }) => {
  const { query, push } = useRouter();
  const onChange = (page) => {
    push(`/?page=${page}${query.q ? `&q=${query.q}` : ''}`);
  };
  if (loading) {
    return (
      <div
        style={{ height: '80vh' }}
        className="flex justify-center items-center"
      >
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div style={{ padding: gutters.xxl }}>
      {items.length === 0 ? (
        <div
          style={{ height: '80vh' }}
          className="flex justify-center items-center"
        >
          <Empty />
        </div>
      ) : (
        <Row gutter={[24, 24]}>
          {items.map((item) => (
            <Col key={item.id} span={8}>
              <Card
                style={{ width: '100%' }}
                cover={
                  <Image src={item.thumbnail} height={250} preview={false} />
                }
              >
                <Card.Meta title={item.name} description={item.address} />
                <Rate value={item.rating} style={{ marginTop: gutters.lg }} />
              </Card>
            </Col>
          ))}
        </Row>
      )}
      <Pagination
        current={+query.page}
        total={total}
        className="text-end"
        onChange={onChange}
      />
    </div>
  );
};

CoworkingSpaces.defaultProps = {
  items: [],
  total: 0,
};

export default CoworkingSpaces;
