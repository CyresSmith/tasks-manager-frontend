import { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Notify } from 'notiflix';
import { useNavigate } from 'react-router-dom';

import { FaPlus } from 'react-icons/fa';

import { TextField, FormControl } from '@mui/material';

import {
  FormField,
  ErrorText,
  FormFieldsBox,
} from 'Components/Shared/Form/Form.styled';
import { Form } from './CategoryAddPopup.styled';
import Button from 'components/Shared/Button';
import { useCreateCategoryMutation } from 'redux/categoriesAPI';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(20, 'Must be max 20 characters')
    .required('Required'),
});

const initialValues = {
  name: '',
};

const CategoryAddPopup = ({ refetch, toggleModal }) => {
  const [
    createCategory,
    { isLoading, isSuccess, isError, error, isUninitialized },
  ] = useCreateCategoryMutation();

  const handleCategoryCreate = async data => {
    await createCategory(data);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      Notify.success('Category successfully created!', {
        showOnlyTheLastOne: true,
        position: 'right-top',
      });

      refetch();
      toggleModal();
    }

    if (isError) {
      console.log(error);

      Notify.failure(error.message, {
        showOnlyTheLastOne: true,
        position: 'right-top',
      });
    }
  }, [error, isError, isSuccess, navigate]);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: ({ name }, { resetForm }) => {
      handleCategoryCreate({ name });

      if (isSuccess) {
        resetForm();
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormFieldsBox>
        <FormField>
          <FormControl fullWidth>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
            />
          </FormControl>
          <ErrorText>{formik.touched.name && formik.errors.name}</ErrorText>
        </FormField>
      </FormFieldsBox>

      <Button
        type="submit"
        isLoading={isLoading}
        disabled={isLoading}
        icon={FaPlus}
        iconSize={20}
      >
        Create category
      </Button>
    </Form>
  );
};

export default CategoryAddPopup;
