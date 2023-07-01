import { Outlet } from 'react-router-dom';
import AppBar from 'Components/AppBar';
import ScrollUpButton from 'components/Shared/ScrollUpButton';

import { HiArrowUp } from 'react-icons/hi';

const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
      <ScrollUpButton icon={HiArrowUp} iconSize={20} />
    </>
  );
};

export default SharedLayout;
