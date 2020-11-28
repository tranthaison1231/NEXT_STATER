import { Avatar, Button, Col, Form, Modal, Row, Space, Typography } from 'antd';
import { FC } from 'react';
import { FormInput } from '../UIKit';
import FormUploadImage from '../UIKit/FormUploadimage';

interface Props {
  visible: boolean;
  closeModal: () => void;
}

const EditModal: FC<Props> = ({ visible, closeModal }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      onCancel={closeModal}
      width={600}
      footer={false}
      destroyOnClose
    >
      <Typography.Title level={4}>Business Infomation</Typography.Title>
      <Form
        form={form}
        layout="vertical"
        style={{ marginTop: 30 }}
        requiredMark="optional"
        onFinish={(value) => console.log(value)}
      >
        <Row gutter={20}>
          <Col span={12} className="flex justify-center ">
            <Avatar style={{ width: 140, height: 140 }} />
          </Col>
          <Col span={12}>
            <FormInput name="businessName" label="Business Name" />
            <FormInput name="bussinessEmail" label="Business Email" />
          </Col>
          <Col span={12}>
            <FormInput name="bussinessPhone" label="Business Phone" />
          </Col>
          <Col span={12}>
            <FormInput name="joinDate" label="Join Date" />
          </Col>
          <Col span={12}>
            <FormInput name="country" label="Country" />
          </Col>
          <Col span={12}>
            <FormInput name="city" label="City" />
          </Col>
          <Col span={24}>
            <FormInput name="address" label="Address" />
          </Col>
          <Col span={24}>
            <FormInput name="description" label="Description" />
          </Col>
          <Col span={24}>
            <FormUploadImage
              name="bussinessPhoto"
              label="Business Photos"
              form={form}
            />
          </Col>
          <Col span={24} className="flex justify-center">
            <Space size={10}>
              <Button onClick={closeModal} size="large">
                Cancel
              </Button>
              <Button type="primary" htmlType="submit" size="large">
                Save
              </Button>
            </Space>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default EditModal;
