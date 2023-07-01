import { PropTypes } from 'prop-types';
import myTheme from 'myTheme';

import StyledButton from './IconButton.styled';

const IconButton = ({
  icon: Icon = null,
  iconSize,
  type = 'button',
  disabled = false,
  ariaLabel,
  round,
  onClick,
  backgroundColor = `${myTheme.colors.background}`,
  color = `${myTheme.colors.primary}`,
}) => {
  return (
    <StyledButton
      type={type}
      disabled={disabled}
      aria-labelledby={ariaLabel}
      round={round}
      onClick={onClick}
      backgroundColor={backgroundColor}
      color={color}
    >
      {Icon && <Icon size={iconSize} />}
    </StyledButton>
  );
};

export default IconButton;
