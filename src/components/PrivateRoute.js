import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export default function PrivateRoute() {
  const location = useLocation();
  const { token } = useSelector(state => state.users);
  // const { isLoggedIn } = useSelector(state => state.users);

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ location }} replace />
  );
}

// import { Navigate } from 'react-router-dom';

// export default function PrivateRoute({
//   children,
//   redirectPath = '/',
//   isLoggedIn,
// }) {
//   if (!isLoggedIn) {
//     return <Navigate to={redirectPath} replace />;
//   }
//   return children;
// }
