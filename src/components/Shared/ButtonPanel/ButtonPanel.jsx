import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../Button';
import { ButtonBox } from './ButtonPanel.styled';

import { TbArrowBackUp } from 'react-icons/tb';
import Container from '../Container';

const ButtonPanel = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Container>
      <ButtonBox>
        {children}
        {location.pathname !== '/' && (
          <Button
            icon={TbArrowBackUp}
            iconSize={20}
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
        )}
      </ButtonBox>
    </Container>
  );
};

export default ButtonPanel;
