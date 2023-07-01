import { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Notify } from 'notiflix';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { TextField, FormControl } from '@mui/material';

import { IoMdLogIn } from 'react-icons/io';

import { passwordRegex } from 'Components/Shared/Form/regExp';

import { Form, FormField, ErrorText } from 'Components/Shared/Form/Form.styled';
import Button from 'components/Shared/Button';
import { login } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Must be valid email').required('Required'),
  password: Yup.string()
    .min(8, 'Must be at least 8 characters')
    .max(20, 'Must be max 20 characters')
    .matches(
      passwordRegex,
      'Must be at least one capital letter and one number'
    )
    .required('Required'),
});

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const { isLoading, isError, error, isLoggedIn } = useAuth();
  // console.log('🚀 ~ file: LoginForm.jsx:40 ~ LoginForm ~ error:', error);

  const handleLogin = async userData => {
    dispatch(login(userData));
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');

      Notify.success('Login was success!', {
        showOnlyTheLastOne: true,
        position: 'right-top',
      });
    }

    if (isError) {
      Notify.failure(error, {
        showOnlyTheLastOne: true,
        position: 'right-top',
      });
    }
  }, [isError, isLoggedIn, navigate]);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: ({ email, password }, { resetForm }) => {
      const user = {
        email: email.trim(),
        password: password.trim(),
      };

      handleLogin(user);

      if (isLoggedIn) {
        resetForm();
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <div style={{ marginBottom: '50px' }}>
        <FormField>
          <FormControl fullWidth>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
            />
          </FormControl>
          <ErrorText>{formik.touched.email && formik.errors.email}</ErrorText>
        </FormField>

        <FormField>
          <FormControl fullWidth>
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
            />
          </FormControl>
          <ErrorText>
            {formik.touched.password && formik.errors.password}
          </ErrorText>
        </FormField>
      </div>

      <Button
        type="submit"
        isLoading={isLoading}
        disabled={isLoading}
        icon={IoMdLogIn}
        iconSize={20}
      >
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
