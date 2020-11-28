import { gutters } from '@/utils';
import { Button, Input } from 'antd';
import { FC } from 'react';
import Field from '../UIKit/Field';

interface Props {
  email: string;
}

const AccountSetting: FC<Props> = ({ email }) => {
  return (
    <div>
      <Field
        title="Contact Email"
        value={<Input value={email} disabled style={{ width: 300 }} />}
      />
      <Field
        style={{ marginTop: gutters.xs }}
        title="Password"
        value={
          <Input
            type="password"
            value="123456"
            disabled
            style={{ width: 300 }}
          />
        }
      />
      <Button type="primary" style={{ marginTop: gutters.xl }}>
        Change
      </Button>
    </div>
  );
};

export default AccountSetting;
