import { Input, Typography } from 'antd';
import { FC } from 'react';

const { Title } = Typography;

interface Props {
  onSearch: (value) => void;
}

const CoworkingSearch: FC<Props> = ({ onSearch }) => {
  return (
    <div
      style={{ height: 'calc(100vh - 90px)' }}
      className="flex justify-center items-center"
    >
      <div>
        <Title>Find A Coworking Space</Title>
        <Input.Search
          onSearch={onSearch}
          size="large"
          placeholder="Search By Address or Coworking Space"
        />
      </div>
    </div>
  );
};

export default CoworkingSearch;
