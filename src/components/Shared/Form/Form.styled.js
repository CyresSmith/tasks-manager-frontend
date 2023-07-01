import styled from '@emotion/styled';
import myTheme from 'myTheme';

import { FormHelperText } from '@mui/material';

export const Form = styled.form`
  margin: 0 auto;
  width: 300px;
  padding: ${myTheme.space[4]};
  background-color: ${myTheme.colors.white};
  border-radius: ${myTheme.radii.normal};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormFieldsBox = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

export const FormField = styled.div`
  position: relative;
  width: 100%;
  display: inline-block;

  :not(:last-of-type) {
    margin-bottom: ${myTheme.space[5]};
  }
`;

export const ErrorText = styled(FormHelperText)`
  position: absolute;
  left: 0;
  top: 55px;
  color: red;
`;
