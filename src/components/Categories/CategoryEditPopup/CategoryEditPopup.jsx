import { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Notify } from 'notiflix';
import { useNavigate } from 'react-router-dom';

import { FaPlus } from 'react-icons/fa';

import { TextField, FormControl } from '@mui/material';

import {
  FormFieldsBox,
  FormField,
  ErrorText,
} from 'Components/Shared/Form/Form.styled';
import Button from 'components/Shared/Button';
import { useUpdateCategoryMutation } from 'redux/categoriesAPI';
import { Form } from '../CategoryAddPopup/CategoryAddPopup.styled';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(20, 'Must be max 20 characters')
    .required('Required'),
});

const initialValues = {
  name: '',
};

const CategoryEditPopup = ({ refetch, toggleModal, id }) => {
  const [
    updateCategory,
    { isLoading, isSuccess, isError, error, isUninitialized },
  ] = useUpdateCategoryMutation();

  const handleCategoryUpdate = async data => {
    await updateCategory({ id, data });
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      Notify.success('Category successfully updated!', {
        showOnlyTheLastOne: true,
        position: 'right-top',
      });

      refetch();
      toggleModal();
    }

    if (isError) {
      if (Array.isArray(error.data.message)) {
        return error.data.message.forEach(element => {
          Notify.failure(element, {
            position: 'right-top',
          });
        });
      }

      Notify.failure(error.data.message, {
        showOnlyTheLastOne: true,
        position: 'right-top',
      });
    }
  }, [error, isError, isSuccess, navigate]);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: ({ name }, { resetForm }) => {
      handleCategoryUpdate({ name });

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
        Update category
      </Button>
    </Form>
  );
};

export default CategoryEditPopup;
