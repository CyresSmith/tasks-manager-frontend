import {
  NavigationList,
  NavigationItem,
  NavigationLink,
} from './Navigation.styled';

const Navigation = ({ pages = [] }) => {
  return (
    <NavigationList>
      {pages.map(({ page = '', link = '/', icon: Icon = null }) => (
        <NavigationItem key={page}>
          <NavigationLink to={link}>
            {Icon && <Icon />} {page}
          </NavigationLink>
        </NavigationItem>
      ))}
    </NavigationList>
  );
};

export default Navigation;
