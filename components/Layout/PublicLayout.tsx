import { gutters } from '@/utils';
import { Button, Input, Row, Space } from 'antd';
import Image from 'next/image';
import { FC } from 'react';
import styled from 'styled-components';
import { useTranslation } from '@/i18n';
import { useRouter } from 'next/router';
export const StyledRow = styled(Row)`
  border-bottom: 1px solid ${({ theme }) => theme.color.secondary};
`;

interface Props {
  children: JSX.Element;
  searchVisible?: boolean;
  handleSearch?: () => void;
  onLogin?: () => void;
  onRegister?: () => void;
  onSearch?: (value: string) => void;
}

const PublicLayout: FC<Props> = ({
  children,
  searchVisible,
  onLogin,
  onRegister,
  onSearch,
}) => {
  const { query } = useRouter();
  const { t } = useTranslation();
  return (
    <div>
      <StyledRow
        style={{ padding: gutters.sm }}
        justify="space-between"
        align="middle"
      >
        <Space size={40}>
          <Image
            src="/logo.png"
            width={200}
            height={50}
            className="object-contain pointer"
          />
          {searchVisible && (
            <Input.Search
              size="large"
              defaultValue={query.q}
              style={{ width: 500 }}
              onSearch={onSearch}
              placeholder={t('common:searchPlaceholder')}
            />
          )}
        </Space>
        <Space size={10}>
          <Button size="large" type="primary" onClick={onLogin}>
            Login
          </Button>
          <Button size="large" onClick={onRegister}>
            Register
          </Button>
          <Button size="large"> Add Your Space</Button>
        </Space>
      </StyledRow>
      <div>{children}</div>
    </div>
  );
};

PublicLayout.defaultProps = {
  searchVisible: false,
  handleSearch: () => {},
};

export default PublicLayout;
