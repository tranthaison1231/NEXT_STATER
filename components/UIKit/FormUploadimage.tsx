import { Form, message, Upload } from 'antd';
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons';

import { FC, useState } from 'react';
import { uploadPhoto } from '@/api/upload';
import styled from 'styled-components';
import { FormInstance } from 'antd/lib/form';

export const StyledFormUploadimage = styled(Upload)`
  .ant-upload.ant-upload-select-picture-card {
    width: 100%;
  }
`;

interface Props {
  name: string;
  label?: string;
  required?: boolean;
  messageRequire?: string;
  initialValue?: string;
  disabled?: boolean;
  form: FormInstance<unknown>;
}

const FormUploadImage: FC<Props> = ({
  name,
  label,
  required,
  messageRequire,
  disabled,
  initialValue,
  form,
}) => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);

  const uploadButton = (
    <div className="flex items-center">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="ant-upload-text" style={{ marginLeft: 10 }}>
        Upload Image
      </div>
    </div>
  );

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      setImage(info.file.response.data.url);
      form.setFieldsValue({
        [name]: info.file.response.data.url,
      });
      setLoading(false);
    } else if (info.file.status === 'error') {
      form.setFieldsValue({
        [name]: null,
      });
      setLoading(false);
      message.error(`${info.file.name} file upload failed.`);
    }
  };
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[
        {
          required,
          message: messageRequire,
        },
      ]}
      initialValue={initialValue}
    >
      <StyledFormUploadimage
        disabled={disabled}
        listType="picture-card"
        name="file"
        accept="image/*"
        style={{ width: '100%' }}
        showUploadList={false}
        customRequest={uploadPhoto}
        onChange={handleChange}
        withCredentials
      >
        {image ? (
          <img src={image} alt="avatar" style={{ width: '100%' }} />
        ) : (
          uploadButton
        )}
      </StyledFormUploadimage>
    </Form.Item>
  );
};

FormUploadImage.defaultProps = {
  required: true,
};

export default FormUploadImage;
