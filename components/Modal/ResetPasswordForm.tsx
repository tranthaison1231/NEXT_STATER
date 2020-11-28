import { Button, Form, Input, Modal, Typography } from 'antd';
import { FC } from 'react';
import { useTranslation } from '@/i18n';
import { gutters } from '@/utils';
import { validateRegex } from '@/utils/validate';

interface Props {
  visible: boolean;
  closeModal: () => void;
  handleResetPassword: (values: {
    password: string;
    confirmPassword: string;
  }) => void;
  isLoading: boolean;
}

const { Title } = Typography;

const ResetPasswordForm: FC<Props> = ({
  visible,
  closeModal,
  isLoading,
  handleResetPassword,
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
      <Title level={3}>{t('common:resetPassword')}</Title>
      <Form
        layout="vertical"
        onFinish={handleResetPassword}
        style={{ marginTop: 30 }}
        requiredMark="optional"
      >
        <Form.Item
          name="password"
          rules={[
            { required: true, message: t('validate:password') },
            {
              pattern: validateRegex.password,
              message: t('validate:passwordUnValid'),
            },
          ]}
        >
          <Input size="large" type="password" placeholder="Password" />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          rules={[
            { required: true, message: t('validate:password') },
            {
              pattern: validateRegex.password,
              message: t('validate:passwordUnValid'),
            },
            ({ getFieldValue }) => ({
              validator(_rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(t('validate:passwordDontMatch'));
              },
            }),
          ]}
        >
          <Input size="large" type="password" placeholder="Confirm Password" />
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
      </Form>
    </Modal>
  );
};

export default ResetPasswordForm;
