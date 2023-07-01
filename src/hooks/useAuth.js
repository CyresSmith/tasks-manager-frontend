import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsLoading,
  selectIsError,
  selectError,
  selectToken,
} from 'redux/auth/selectors';

export const useAuth = () => {
  return {
    user: useSelector(selectUser),
    isLoggedIn: useSelector(selectIsLoggedIn),
    isLoading: useSelector(selectIsLoading),
    isError: useSelector(selectIsError),
    error: useSelector(selectError),
    token: useSelector(selectToken),
  };
};
