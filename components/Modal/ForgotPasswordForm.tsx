import { Button, Form, Input, Modal, Typography } from 'antd';
import { FC } from 'react';
import { useTranslation } from '@/i18n';
import { gutters } from '@/utils';
import { ForgotPasswordDto } from '@/api/auth';

interface Props {
  visible: boolean;
  closeModal: () => void;
  handleForgotPassword: (values: ForgotPasswordDto) => void;
  isLoading: boolean;
  loginNavigate: () => void;
}

const { Title } = Typography;

const ForgotPassword: FC<Props> = ({
  visible,
  closeModal,
  isLoading,
  handleForgotPassword,
  loginNavigate,
}) => {
  const { t } = useTranslation();
  return (
    <Modal
      visible={visible}
      onCancel={closeModal}
      width={450}
      footer={false}
      destroyOnClose
    >
      <Title level={3}>{t('common:forgotPassword')}</Title>
      <p>{t('common:forgotPasswordDescription')}</p>
      <Form
        layout="vertical"
        onFinish={handleForgotPassword}
        style={{ marginTop: 30 }}
        requiredMark="optional"
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: t('validate:email') }]}
        >
          <Input size="large" placeholder="Email" />
        </Form.Item>
        <Form.Item style={{ marginTop: gutters.xl }}>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            style={{ width: '100%', marginTop: gutters.xxxs }}
            loading={isLoading}
          >
            Reset Password
          </Button>
        </Form.Item>
        <Form.Item style={{ marginTop: gutters.xl }}>
          <Button
            type="primary"
            onClick={loginNavigate}
            size="large"
            style={{ width: '100%', marginTop: gutters.xxxs }}
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ForgotPassword;
