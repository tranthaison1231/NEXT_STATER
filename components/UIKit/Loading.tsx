import { FC } from 'react';

interface Props {
  loading: boolean;
}

const Loading: FC<Props> = ({ loading }) => {
  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <img src="/loading.svg" alt="" />
      </div>
    );
  }
  return null;
};

export default Loading;
