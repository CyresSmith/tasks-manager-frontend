import { BadgeBox, BadgeNumber } from './Badge.styled';

const Badge = ({ number }) => {
  return (
    <BadgeBox>
      <BadgeNumber>{number}</BadgeNumber>
    </BadgeBox>
  );
};

export default Badge;
