import { Business } from '@/configs/interface';
import { formatDate } from '@/utils';
import { Avatar, Card, Space, Typography } from 'antd';
import { FC } from 'react';
import FieldInfo from './FieldInfo';

interface Props {
  data: Business;
  onEdit: () => void;
}

const InfoCard: FC<Props> = ({ data, onEdit }) => {
  return (
    <Card extra={<Typography.Link onClick={onEdit}>Edit</Typography.Link>}>
      <div className="flex col">
        <Avatar
          style={{ width: 150, height: 150, margin: 'auto' }}
          src={data.avatar}
        />
        <Typography.Title level={1}>{data.fullName}</Typography.Title>
        <Space direction="vertical" size={10}>
          <FieldInfo
            title="Contact"
            value={
              <>
                <Space size={20}>
                  <Typography.Text>Email:</Typography.Text>
                  <Typography.Text>{data.emailContact}</Typography.Text>
                </Space>
                <div>
                  <Space size={20}>
                    <Typography.Text>Phone:</Typography.Text>
                    <Typography.Text>{data.phoneContact}</Typography.Text>
                  </Space>
                </div>
              </>
            }
          />
          <FieldInfo title="Join Date" value={formatDate(data.createdAt)} />
          <FieldInfo title="Contry" value={data.country} />
          <FieldInfo title="City" value={data.city} />
          <FieldInfo title="Address" value={data.address} />
          <FieldInfo title="Description" value={data.description} />
        </Space>
      </div>
    </Card>
  );
};

export default InfoCard;
