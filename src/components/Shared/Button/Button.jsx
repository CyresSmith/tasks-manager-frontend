import { StyledButton, ButtonText, Loader } from './Button.styled';
import { BiLoaderCircle } from 'react-icons/bi';

const Button = ({
  icon: Icon = null,
  iconSize,
  type = 'button',
  disabled = false,
  isLoading = false,
  children,
  onClick,
}) => {
  return (
    <StyledButton type={type} disabled={disabled} onClick={onClick}>
      {isLoading && Icon && (
        <Loader>
          <BiLoaderCircle size={iconSize} />
        </Loader>
      )}
      {!isLoading && Icon && <Icon size={iconSize} />}
      <ButtonText isIconThere={Icon}>{children}</ButtonText>
    </StyledButton>
  );
};

export default Button;
