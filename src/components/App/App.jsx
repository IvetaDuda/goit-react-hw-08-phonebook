import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, Fragment } from 'react';

import { useGetCurrentUserQuery } from 'redux/userApi';
import AppBar from 'components/AppBar/AppBar';
import { useSelector } from 'react-redux';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import Loader from 'components/Loader';
import NotFound from 'components/NotFound';
import { GlobalStyles } from 'index.styled';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../Themes';
import { useDarkMode } from 'hooks/changeTheme';

const Home = lazy(() =>
  import('../../page/Home' /* webpackChunkName: "Home" */)
);
const Contacts = lazy(() =>
  import('../../page/Contacts' /* webpackChunkName: "Contacts" */)
);
const Register = lazy(() =>
  import('../../page/Register' /* webpackChunkName: "Register" */)
);
const Login = lazy(() =>
  import('../../page/Login' /* webpackChunkName: "login" */)
);
const User = lazy(() =>
  import('../../page/User' /*webpackChunkName: "user" */)
);
const App = () => {
  const { token } = useSelector(state => state.users);

  useGetCurrentUserQuery(token, { skip: !token });

  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;

  return (
    <ThemeProvider theme={themeMode}>
      <Fragment>
        <GlobalStyles />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              path="/"
              element={<AppBar onThemeToggler={themeToggler} theme={theme} />}
            >
              <Route index element={<Home />} />
              <Route element={<PublicRoute restricted />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Route>
              <Route element={<PrivateRoute />}>
                <Route path="/user" element={<User />} />
                <Route path="/contacts" element={<Contacts />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </Fragment>
    </ThemeProvider>
  );
};
export default App;

// import { Routes, Route } from 'react-router-dom';
// import { lazy, Suspense } from 'react';

// import { useGetCurrentUserQuery } from 'redux/userApi';
// import AppBar from 'components/AppBar/AppBar';
// import { useSelector } from 'react-redux';
// import PrivateRoute from 'components/PrivateRoute';
// import PublicRoute from 'components/PublicRoute';
// import Loader from 'components/Loader';
// import NotFound from 'components/NotFound';

// const Home = lazy(() =>
//   import('../../page/Home' /* webpackChunkName: "Home" */)
// );
// const Contacts = lazy(() =>
//   import('../../page/Contacts' /* webpackChunkName: "Contacts" */)
// );
// const Register = lazy(() =>
//   import('../../page/Register' /* webpackChunkName: "Register" */)
// );
// const Login = lazy(() =>
//   import('../../page/Login' /* webpackChunkName: "login" */)
// );
// const User = lazy(() =>
//   import('../../page/User' /*webpackChunkName: "user" */)
// );
// const App = () => {
//   const { token, isLoggedIn } = useSelector(state => state.users);
//   useGetCurrentUserQuery(token, { skip: !token });

//   return (
//     <Suspense fallback={<Loader />}>
//       <Routes>
//         <Route path="/" element={<AppBar />}>
//           <Route
//             path="/"
//             element={
//               <PublicRoute redirectPath="/" isLoggedIn={isLoggedIn}>
//                 <Home />
//               </PublicRoute>
//             }
//           />
//           <Route
//             path="/user"
//             element={
//               <PrivateRoute redirectPath="/login" isLoggedIn={isLoggedIn}>
//                 <User />
//               </PrivateRoute>
//             }
//           />

//           <Route
//             element={
//               <PublicRoute
//                 redirectPath="/user"
//                 isLoggedIn={isLoggedIn}
//                 restricted
//               />
//             }
//           >
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//           </Route>

//           {/* <Route
//             element={
//               <PublicRoute
//                 redirectPath="/contacts"
//                 isLoggedIn={isLoggedIn}
//                 restricted
//               />
//             }
//           >
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//           </Route> */}

//           <Route
//             path="/contacts"
//             element={
//               <PrivateRoute redirectPath="/login" isLoggedIn={isLoggedIn}>
//                 <Contacts />
//               </PrivateRoute>
//             }
//           />

//           <Route path="*" element={<NotFound />} />
//         </Route>
//       </Routes>
//     </Suspense>
//   );
// };
// export default App;
