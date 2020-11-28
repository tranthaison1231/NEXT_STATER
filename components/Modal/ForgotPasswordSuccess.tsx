import { Button, Modal, Typography } from 'antd';
import { FC } from 'react';
import { useTranslation } from '@/i18n';
import { gutters } from '@/utils';

interface Props {
  visible: boolean;
  closeModal: () => void;
  loginNavigate: () => void;
  email: string;
}

const { Title } = Typography;

const ForgotPasswordSuccess: FC<Props> = ({
  visible,
  closeModal,
  loginNavigate,
  email,
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
      <p style={{ marginTop: gutters.xl }}>
        {t('common:resetPasswordSuccess', { email: email })}
      </p>
      <Button
        onClick={loginNavigate}
        size="large"
        type="primary"
        style={{ width: '100%', marginTop: gutters.xs }}
      >
        Login
      </Button>
    </Modal>
  );
};

export default ForgotPasswordSuccess;
