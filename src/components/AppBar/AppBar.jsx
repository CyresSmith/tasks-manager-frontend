import { Header, HeaderContainer } from './AppBar.styled';

import { IoMdLogIn } from 'react-icons/io';
import { FaUserPlus, FaTasks } from 'react-icons/fa';
import { MdCategory } from 'react-icons/md';

import { selectUser } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

import Logo from './Logo';
import Navigation from '../Shared/Navigation';
import User from './User';

const pages = [
  { page: 'Categories', link: '/', icon: MdCategory },
  { page: 'Tasks', link: '/tasks', icon: FaTasks },
];

const userNavigation = [
  { page: 'Register', link: '/register', icon: FaUserPlus },
  { page: 'Login', link: '/login', icon: IoMdLogIn },
];

const AppBar = () => {
  const user = useSelector(selectUser);

  return (
    <Header>
      <HeaderContainer>
        <nav>
          <Logo />
          {user.id && <Navigation pages={pages} />}
          {!user.id && <Navigation pages={userNavigation} />}
        </nav>
        {user.id && <User user={user} />}
      </HeaderContainer>
    </Header>
  );
};

export default AppBar;
