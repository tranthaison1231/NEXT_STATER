import { Button, Form, Input, Modal, Typography } from 'antd';
import { FC } from 'react';
import { useTranslation } from '@/i18n';
import { validateRegex } from '@/utils/validate';
import { gutters } from '@/utils';
import { useTheme } from 'styled-components';
import { RegisterDto } from '@/api/auth';

interface Values extends RegisterDto {
  confirmPassword: string;
}

interface Props {
  visible: boolean;
  closeModal: () => void;
  handleRegister: (values: Values) => void;
  isLoading: boolean;
  loginNavigate: () => void;
}

const { Title } = Typography;

const RegisterForm: FC<Props> = ({
  visible,
  closeModal,
  handleRegister,
  isLoading,
  loginNavigate,
}) => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Modal
      visible={visible}
      onCancel={closeModal}
      width={450}
      footer={false}
      destroyOnClose
    >
      <Title level={3}>{t('common:joinWithUs')}</Title>
      <Form
        layout="vertical"
        onFinish={handleRegister}
        style={{ marginTop: 30 }}
        requiredMark="optional"
      >
        <Form.Item
          name="fullName"
          rules={[
            {
              required: true,
              message: t('validate:fullNameRequire'),
            },
          ]}
        >
          <Input size="large" placeholder="UserName" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: t('validate:emailRequire'),
            },
            {
              pattern: validateRegex.email,
              message: t('validate:emailUnValid'),
            },
          ]}
        >
          <Input size="large" placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: t('validate:passwordRequire') },
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
          style={{ marginBottom: gutters.xxxs }}
          rules={[
            { required: true, message: t('validate:passwordRequire') },
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
            Sign Up
          </Button>
        </Form.Item>
      </Form>
      <p className="text-center">{t('common:smartosRegisterDesc')}</p>
      <p className="text-center"> {t('common:smartosRegisterBotDesc')}</p>
      <p className="text-center" style={{ marginTop: gutters.xl }}>
        Already a member?
        <span
          className="pointer"
          style={{ color: theme.color.primary }}
          onClick={loginNavigate}
        >
          {' '}
          Login
        </span>
      </p>
    </Modal>
  );
};

export default RegisterForm;
