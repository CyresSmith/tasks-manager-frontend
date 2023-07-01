import { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Notify } from 'notiflix';

import { useNavigate } from 'react-router-dom';

import {
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';

import { FaUserPlus } from 'react-icons/fa';

import { Form, FormField, ErrorText } from 'Components/Shared/Form/Form.styled';
import Button from 'components/Shared/Button';

import { passwordRegex } from 'Components/Shared/Form/regExp';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Must be valid email').required('Required'),
  role: Yup.string()
    .oneOf(['developer', 'designer', 'marketing'])
    .required('Required'),
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
  role: '',
  password: '',
};

const RegisterForm = () => {
  const dispatch = useDispatch();

  const { isLoading, isLoggedIn, isError, error } = useAuth();

  const handleRegister = async user => {
    dispatch(register(user));
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');

      Notify.success('Registration was success!', {
        showOnlyTheLastOne: true,
        position: 'right-top',
      });
    }

    if (isError) {
      Notify.failure(error.data.message, {
        showOnlyTheLastOne: true,
        position: 'right-top',
      });
    }
  }, [isLoggedIn]);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: ({ email, role, password }, { resetForm }) => {
      const newUser = {
        email: email.trim(),
        role,
        password: password.trim(),
      };

      handleRegister(newUser);

      resetForm();
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
            <InputLabel id="role">Role</InputLabel>
            <Select
              labelId="role"
              id="role"
              name="role"
              value={formik.values.role}
              label="Role"
              onChange={formik.handleChange}
            >
              <MenuItem value="developer">Developer</MenuItem>
              <MenuItem value="designer">Designer</MenuItem>
              <MenuItem value="marketing">Marketing</MenuItem>
            </Select>
            <ErrorText>{formik.touched.role && formik.errors.role}</ErrorText>
          </FormControl>
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
        icon={FaUserPlus}
        iconSize={20}
      >
        Register
      </Button>
    </Form>
  );
};

export default RegisterForm;
