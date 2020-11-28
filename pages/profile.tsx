import { AccountSetting } from '@/components/Form';
import { PrivateLayout } from '@/components/Layout';
import { MyCoworkingSpaces } from '@/components/List';
import { EditModal } from '@/components/Modal';
import InfoCard from '@/components/UIKit/InfoCard';
import withPrivateRoute from '@/hocs/withPrivateRoute';
import { useToggle } from '@/hooks';
import { RootState } from '@/redux/reducers';
import { gutters } from '@/utils';
import { Col, Row, Image, Tabs } from 'antd';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { push } = useRouter();
  const { business } = useSelector((state: RootState) => state.auth);
  const [edit, openEdit, closeEdit] = useToggle(false);

  const onSearch = (value) => {
    push(`/profile?page=1&q=${value}`);
  };

  const onChangeTab = (tab) => {
    console.log(tab);
  };
  return (
    <PrivateLayout searchVisible onSearch={onSearch}>
      <Image
        src="/default-thumnail.png"
        width="100%"
        height={300}
        preview={false}
      />
      <Row style={{ padding: gutters.xl }} gutter={50}>
        <Col span={6}>
          <InfoCard data={business} onEdit={openEdit} />
        </Col>
        <Col span={18}>
          <Tabs defaultActiveKey="1" onChange={onChangeTab}>
            <Tabs.TabPane tab="My Coworking Spaces" key="1">
              <MyCoworkingSpaces
                items={[
                  {
                    id: '1',
                    thumbnail:
                      'https://s3-ap-southeast-1.amazonaws.com/csm-global-files-staging.enouvo.com/ES1_Studio302-d0ba5241fa0c5b54.JPG',
                    name: 'Enouvo space - 15 Tạ mỹ duật',
                    address: '15 Tạ Mỹ Duật, An Hải Bắc, Sơn Trà ',
                    rating: 0,
                  },
                  {
                    id: '2',
                    thumbnail:
                      'https://s3-ap-southeast-1.amazonaws.com/csm-global-files-staging.enouvo.com/ES1_Studio302-d0ba5241fa0c5b54.JPG',
                    name: 'Enouvo space - 15 Tạ mỹ duật',
                    address: '15 Tạ Mỹ Duật, An Hải Bắc, Sơn Trà ',
                    rating: 5,
                  },
                ]}
              />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Reviews" key="2">
              Content of Tab Pane 2
            </Tabs.TabPane>
            <Tabs.TabPane tab="Account Settings" key="3">
              <AccountSetting email="Space@enouvo.com" />
            </Tabs.TabPane>
          </Tabs>
        </Col>
      </Row>
      <EditModal visible={edit} closeModal={closeEdit} />
    </PrivateLayout>
  );
};

export default withPrivateRoute(Profile);
