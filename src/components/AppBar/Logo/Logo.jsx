import { LogoBox } from './Logo.styled';

import { MdTaskAlt } from 'react-icons/md';

const Logo = () => {
  return (
    <LogoBox to="/">
      <MdTaskAlt size={48} />
      <span>Tasks manager</span>
    </LogoBox>
  );
};

export default Logo;
