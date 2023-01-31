import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { useGetCurrentUserQuery } from 'redux/userApi';
import AppBar from 'components/AppBar/AppBar';
import { useSelector } from 'react-redux';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import Loader from 'components/Loader';
import NotFound from 'components/NotFound';

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

const App = () => {
  const { token, isLoggedIn } = useSelector(state => state.users);
  useGetCurrentUserQuery(undefined, { skip: !token });

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route
            path="/"
            element={
              <PublicRoute redirectPath="/" isLoggedIn={isLoggedIn}>
                <Home />
              </PublicRoute>
            }
          />

          <Route
            element={
              <PublicRoute
                redirectPath="/contacts"
                isLoggedIn={isLoggedIn}
                restricted
              />
            }
          >
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectPath="/login" isLoggedIn={isLoggedIn}>
                <Contacts />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
export default App;

// import { useGetCurrentUserQuery } from 'redux/userApi';
// import AppBar from 'components/AppBar/AppBar';
// import { useSelector } from 'react-redux';
// import PrivateRoute from 'components/PrivateRoute';
// import PublicRoute from 'components/PublicRoute';
// import Loader from 'components/Loader';
// import NotFound from 'components/NotFound';
// import { Container } from './Container.styled';

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

// const App = () => {
//   const { token, isLoggedIn } = useSelector(state => state.users);
//   useGetCurrentUserQuery(undefined, { skip: !token });

//   return (
//     <>
//       {/* <AppBar /> */}

//       <Suspense fallback={<Loader />}>
//         <Container>
//           <AppBar />
//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <PublicRoute redirectPath="/" isLoggedIn={isLoggedIn}>
//                   <Home />
//                 </PublicRoute>
//               }
//             />

//             <Route
//               element={
//                 <PublicRoute
//                   redirectPath="/contacts"
//                   isLoggedIn={isLoggedIn}
//                   restricted
//                 />
//               }
//             >
//               <Route path="/login" element={<Login />} />
//               <Route path="/register" element={<Register />} />
//             </Route>

//             <Route
//               path="/contacts"
//               element={
//                 <PrivateRoute redirectPath="/login" isLoggedIn={isLoggedIn}>
//                   <Contacts />
//                 </PrivateRoute>
//               }
//             />

//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </Container>
//       </Suspense>
//     </>
//   );
// };
// export default App;
