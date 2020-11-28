import { getMe, getBusinessMe } from '@/redux/auth';
import { useAppDispatch } from '@/redux/store';
import { getToken } from '@/utils';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const withPrivateRoute = (Component) => (props) => {
  const { push } = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const isAuth = getToken();
    if (!isAuth) {
      push('/');
    } else {
      dispatch(getBusinessMe());
      dispatch(getMe());
    }
  }, []);

  return <Component {...props} />;
};

export default withPrivateRoute;
