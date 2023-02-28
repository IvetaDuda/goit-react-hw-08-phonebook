import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export default function PublicRoute() {
  const location = useLocation();
  // const { isLoggedIn } = useSelector(state => state.users);
  const { token } = useSelector(state => state.users);

  return !token ? (
    <Outlet />
  ) : (
    <Navigate to="/user" state={{ location }} replace />
  );
}

// import { Navigate, Outlet } from 'react-router-dom';

// export default function PublicRoute({
//   children,
//   restricted,
//   redirectPath = '/',
//   isLoggedIn,
// }) {
//   if (isLoggedIn && restricted) {
//     return <Navigate to={redirectPath} replace />;
//   }
//   return children ? children : <Outlet />;
// }
