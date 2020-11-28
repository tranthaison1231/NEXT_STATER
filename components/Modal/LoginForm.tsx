import { Input, Modal, Typography, Form, Button, Space } from 'antd';
import { FC } from 'react';
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from 'react-social-login-buttons';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { GoogleLogin, GoogleLoginResponse } from 'react-google-login';
import { useTranslation } from '@/i18n';
import { LoginDto } from '@/api/auth';
import { gutters } from '@/utils';
import { useTheme } from 'styled-components';
import { validateRegex } from '@/utils/validate';

interface Props {
  visible: boolean;
  closeModal: () => void;
  handleLogin: (values: LoginDto) => void;
  registerNavigate: () => void;
  forgotPasswordNavigate: () => void;
  isLoading: boolean;
  onLoginGoogleSuccess: (response: GoogleLoginResponse) => void;
}

const { Title } = Typography;

const LoginForm: FC<Props> = ({
  visible,
  closeModal,
  handleLogin,
  onLoginGoogleSuccess,
  registerNavigate,
  forgotPasswordNavigate,
  isLoading,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <Modal
      visible={visible}
      onCancel={closeModal}
      width={450}
      footer={false}
      destroyOnClose
    >
      <Title level={3}>{t('common:welcomeBack')}</Title>
      <Form
        layout="vertical"
        onFinish={handleLogin}
        style={{ marginTop: 30 }}
        requiredMark="optional"
      >
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
          style={{ marginBottom: gutters.xxxs }}
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
        <span
          style={{ color: theme.color.primary }}
          className="pointer"
          onClick={forgotPasswordNavigate}
        >
          Forgot password
        </span>
        <Form.Item style={{ marginTop: gutters.xl }}>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            style={{ width: '100%', marginTop: gutters.xxxs }}
            loading={isLoading}
          >
            Login
          </Button>
        </Form.Item>
      </Form>
      <div className="flex col items-center">
        <p className="text-center">
          Don't have an account?
          <span
            className="pointer"
            style={{ color: theme.color.primary }}
            onClick={registerNavigate}
          >
            {' '}
            Register
          </span>
        </p>
        <p className="text-center">Or log in with</p>
        <Space size={10} style={{ marginTop: gutters.xl }}>
          <FacebookLogin
            appId={process.env.NEXT_PUBLIC_FACEBOOK_ID}
            callback={() => {}}
            render={(renderProps) => (
              <FacebookLoginButton onClick={renderProps.onClick}>
                <span>Facebook</span>
              </FacebookLoginButton>
            )}
          />
          <GoogleLogin
            clientId="543088300698-lqvudsv0m52lpuqvvjk97aa3clqrstg6.apps.googleusercontent.com"
            render={(renderProps) => (
              <GoogleLoginButton onClick={renderProps.onClick}>
                <span>Google</span>
              </GoogleLoginButton>
            )}
            onSuccess={onLoginGoogleSuccess}
            onFailure={(response) => {
              console.error(response);
            }}
          />
        </Space>
      </div>
    </Modal>
  );
};

export default LoginForm;
