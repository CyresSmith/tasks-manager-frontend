import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Spinner from 'components/Shared/Spinner';
import SharedLayout from 'pages/SharedLayout';
import Tasks from 'pages/Tasks';
import Categories from 'pages/Categories';
import Register from 'pages/Register';
import Login from 'pages/Login';
import PrivateRoute from 'components/PrivateRoute';
import Task from 'pages/Task';
import { getCurrentUser } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, token } = useAuth();

  useEffect(() => {
    if (!token) {
      return;
    }

    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route
                index
                element={
                  <PrivateRoute>
                    <Categories />
                  </PrivateRoute>
                }
              />

              <Route
                path="/tasks"
                element={
                  <PrivateRoute>
                    <Tasks />
                  </PrivateRoute>
                }
              >
                <Route
                  path="category/:categoryId"
                  element={
                    <PrivateRoute>
                      <Tasks />
                    </PrivateRoute>
                  }
                />
              </Route>
              <Route
                path="/tasks/:taskId"
                element={
                  <PrivateRoute>
                    <Task />
                  </PrivateRoute>
                }
              />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
        </Suspense>
      )}
    </>
  );
}

export default App;
