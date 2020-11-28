import { useTranslation } from '@/i18n';
import { Form, Input } from 'antd';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { FC } from 'react';

interface Props {
  name: string;
  label?: string;
  required?: boolean;
  messageRequire?: string;
  messageValidate?: string;
  initialValue?: string;
  onChange?: (_value) => void;
  pattern?: RegExp;
  placeholder?: string;
  style?: React.CSSProperties;
  prefix?: React.ReactNode;
  type?: string;
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
  disabled?: boolean;
  size?: SizeType;
}

const FormInput: FC<Props> = ({
  name,
  label,
  required,
  messageRequire,
  messageValidate,
  onChange,
  placeholder,
  pattern,
  style,
  prefix,
  type,
  addonBefore,
  addonAfter,
  disabled,
  initialValue,
  size,
}) => {
  const { t } = useTranslation();
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[
        {
          required,
          message: messageRequire,
        },
        {
          pattern,
          message: messageValidate || t(`validate:${name}UnValid`),
        },
      ]}
      initialValue={initialValue}
    >
      <Input
        disabled={disabled}
        style={{ ...style }}
        onChange={onChange}
        placeholder={placeholder || `Enter ${name}`}
        prefix={prefix}
        type={type}
        size={size}
        addonAfter={addonAfter}
        addonBefore={addonBefore}
      />
    </Form.Item>
  );
};

FormInput.defaultProps = {
  required: true,
  type: 'text',
};

export default FormInput;
