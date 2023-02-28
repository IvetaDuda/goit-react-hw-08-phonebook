import { useSelector } from 'react-redux';
import { useGetCurrentUserQuery } from 'redux/userApi';

import LogoutInfo from './LogoutInfo';

const Logout = () => {
  const { token } = useSelector(state => state.users);
  const { data, isFetching } = useGetCurrentUserQuery(token, { skip: !token });

  return <>{data && !isFetching && <LogoutInfo />}</>;
};
export default Logout;
