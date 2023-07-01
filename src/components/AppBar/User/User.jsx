import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { IoMdLogOut } from 'react-icons/io';
import { Notify } from 'notiflix';

import IconButton from 'components/Shared/IconButton';
import { UserBox, UserInfo, Email, Role } from './User.styled';
import { useAuth } from 'hooks/useAuth';
import { logout } from 'redux/auth/authOperations';

const User = () => {
  const dispatch = useDispatch();

  const { user, isLoading, isLoggedIn, isError, error } = useAuth();

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (!isLoggedIn) {
      Notify.success('Successfully Logout');
    }

    if (isError) {
      Notify.failure(error);
    }
  }, [error, isError, isLoggedIn]);

  return (
    <UserBox>
      <UserInfo>
        <Email>{user?.email}</Email>
        <Role>{user?.role}</Role>
      </UserInfo>
      <IconButton
        icon={IoMdLogOut}
        iconSize={20}
        onClick={handleLogout}
        isLoading={isLoading}
        disabled={isLoading}
        round
      />
    </UserBox>
  );
};

export default User;
