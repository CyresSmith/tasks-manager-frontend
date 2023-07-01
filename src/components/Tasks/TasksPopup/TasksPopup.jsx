import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Notify } from 'notiflix';
import { useNavigate, useLocation } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import {
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import {
  FormField,
  ErrorText,
  FormFieldsBox,
} from 'Components/Shared/Form/Form.styled';

import Button from 'components/Shared/Button';

import { useGetAllCategoriesQuery } from 'redux/categoriesAPI';
import Spinner from 'components/Shared/Spinner';
import { Form } from './TasksPopup.styled';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(20, 'Must be max 20 characters')
    .required('Required'),

  desc: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(100, 'Must be max 100 characters')
    .required('Required'),

  dateStart: Yup.date().typeError('Please enter a valid date').required(),

  dateEnd: Yup.date().typeError('Please enter a valid date').required(),

  category: Yup.number().required('Required'),
});

const initialValues = {
  name: '',
  desc: '',
  dateStart: null,
  dateEnd: null,
  category: '',
};

const TasksPopup = ({
  refetch,
  toggleModal,
  task = null,
  actionHook,
  btnIcon,
  btnText,
}) => {
  const [action, { isLoading, isSuccess, isError, error, isUninitialized }] =
    actionHook();

  const {
    data: categoriesData,
    isLoading: getCategoriesLoading,
    isSuccess: getCategoriesSuccess,
    isError: getCategoriesError,
    error: CategoriesError,
  } = useGetAllCategoriesQuery(null, { refetchOnMountOrArgChange: true });

  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (taskData, { resetForm }) => {
      handleTaskData({
        ...taskData,
        dateStart: new Date(taskData.dateStart).toISOString(),
        dateEnd: new Date(taskData.dateEnd).toISOString(),
      });

      if (isSuccess) {
        resetForm();
      }
    },
  });

  const handleStartDateChange = date => {
    formik.setFieldValue(`dateStart`, date.toString());
  };

  const handleEndDateChange = date => {
    formik.setFieldValue(`dateEnd`, date.toString());
  };

  const handleCategoryChange = event => {
    formik.setFieldValue('category', event.target.value);
  };

  const handleTaskData = async data => {
    if (task) {
      const { id } = task;
      return await action({ id, data });
    }

    return await action(data);
  };

  useEffect(() => {
    if (!task) {
      return;
    }

    formik.setFieldValue(`name`, task.name);
    formik.setFieldValue(`desc`, task.desc);
  }, [categoriesData]);

  useEffect(() => {
    if (!categoriesData) {
      return;
    }

    setCategories(categoriesData);
  }, [categoriesData]);

  useEffect(() => {
    if (isSuccess) {
      refetch && refetch();

      Notify.success('Operation successful!', {
        showOnlyTheLastOne: true,
        position: 'right-top',
      });

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

  return (
    <>
      {getCategoriesLoading && <Spinner />}
      {categories && (
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

            <FormField>
              <FormControl fullWidth>
                <TextField
                  fullWidth
                  id="desc"
                  name="desc"
                  label="Description"
                  value={formik.values.desc}
                  onChange={formik.handleChange}
                  error={formik.touched.desc && Boolean(formik.errors.desc)}
                />
              </FormControl>
              <ErrorText>{formik.touched.desc && formik.errors.desc}</ErrorText>
            </FormField>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <FormField>
                <FormControl fullWidth>
                  <DatePicker
                    format="DD.MM.YYYY"
                    closeOnSelect
                    disablePast
                    id="dateStart"
                    type="date"
                    name="dateStart"
                    label="Start"
                    defaultValue={null}
                    value={formik.values.dateStart}
                    onChange={handleStartDateChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.dateStart &&
                      Boolean(formik.errors.dateStart)
                    }
                  />
                </FormControl>
                <ErrorText>
                  {formik.touched.dateStart && formik.errors.dateStart}
                </ErrorText>
              </FormField>
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <FormField>
                <FormControl fullWidth>
                  <DatePicker
                    format="DD.MM.YYYY"
                    closeOnSelect
                    disablePast
                    id="dateEnd"
                    type="date"
                    name="dateEnd"
                    label="Finish"
                    defaultValue={null}
                    value={formik.values.dateEnd}
                    onChange={handleEndDateChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.dateEnd && Boolean(formik.errors.dateEnd)
                    }
                  />
                </FormControl>
                <ErrorText>
                  {formik.touched.dateEnd && formik.errors.dateEnd}
                </ErrorText>
              </FormField>
            </LocalizationProvider>

            <FormField>
              <FormControl fullWidth>
                <InputLabel id="category">Category</InputLabel>
                <Select
                  labelId="category"
                  id="category"
                  value={formik.values.category}
                  label="Category"
                  onChange={handleCategoryChange}
                  error={
                    formik.touched.category && Boolean(formik.errors.category)
                  }
                >
                  {categories.map(category => (
                    <MenuItem key={category.id} value={category.id}>
                      {category.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <ErrorText>
                {formik.touched.category && formik.errors.category}
              </ErrorText>
            </FormField>
          </FormFieldsBox>

          <Button
            type="submit"
            isLoading={isLoading}
            disabled={isLoading}
            icon={btnIcon}
            iconSize={20}
          >
            {btnText}
          </Button>
        </Form>
      )}
    </>
  );
};

export default TasksPopup;
