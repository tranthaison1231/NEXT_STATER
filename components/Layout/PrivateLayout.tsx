import { deleteToken, gutters } from '@/utils';
import { Avatar, Input, Row, Space, Dropdown, Menu, Typography } from 'antd';
import Image from 'next/image';
import { FC, useMemo } from 'react';
import styled from 'styled-components';
import { useTranslation } from '@/i18n';
import { useRouter } from 'next/router';
import {
  UserOutlined,
  PlusCircleOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { RootState } from '@/redux/reducers';
import { useSelector } from 'react-redux';
import Link from 'next/link';

export const StyledRow = styled(Row)`
  border-bottom: 1px solid ${({ theme }) => theme.color.secondary};
`;

interface Props {
  children: React.ReactNode;
  searchVisible?: boolean;
  handleSearch?: () => void;
  onSearch?: (value: string) => void;
}

const PrivateLayout: FC<Props> = ({ children, searchVisible, onSearch }) => {
  const { query, push } = useRouter();
  const { t } = useTranslation();
  const { data: authInfo } = useSelector((state: RootState) => state.auth);

  const logout = () => {
    deleteToken();
    push('/');
  };

  const menu = useMemo(
    () => (
      <Menu>
        <Menu.Item className="flex" onClick={() => push('/profile')}>
          <UserOutlined style={{ fontSize: 20 }} />
          View Profile
        </Menu.Item>
        <Menu.Item className="flex">
          <PlusCircleOutlined style={{ fontSize: 20 }} />
          Add Coworking Space
        </Menu.Item>
        <Menu.Item className="flex" onClick={logout}>
          <LogoutOutlined style={{ fontSize: 20 }} />
          Log Out
        </Menu.Item>
      </Menu>
    ),
    [],
  );

  return (
    <div>
      <StyledRow
        style={{ padding: gutters.sm }}
        justify="space-between"
        align="middle"
      >
        <Space size={40}>
          <Link href="/home">
            <Image
              src="/logo.png"
              width={200}
              height={50}
              className="object-contain pointer"
            />
          </Link>
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
          <Typography.Text strong> {authInfo.fullName} </Typography.Text>
          <Dropdown overlay={menu}>
            <Avatar size="large" />
          </Dropdown>
        </Space>
      </StyledRow>
      <div>{children}</div>
    </div>
  );
};

PrivateLayout.defaultProps = {
  searchVisible: false,
  handleSearch: () => {},
};

export default PrivateLayout;
