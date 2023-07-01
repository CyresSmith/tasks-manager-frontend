import { useEffect } from 'react';
import { Notify } from 'notiflix';

import { TbTrash } from 'react-icons/tb';
import { MdNotInterested } from 'react-icons/md';

import { useDeleteCategoryMutation } from 'redux/categoriesAPI';

import Button from 'components/Shared/Button';
import { Box } from './CategoryDeletePopup.styled';

const CategoryDeletePopup = ({ setActionType, toggleModal, id, refetch }) => {
  const [
    deleteCategory,
    { isLoading, isSuccess, isError, error, isUninitialized },
  ] = useDeleteCategoryMutation();

  const handleDelete = async () => {
    await deleteCategory(id);
  };

  const handleDeleteModalClose = () => {
    setActionType(null);
    toggleModal();
  };

  useEffect(() => {
    if (isSuccess) {
      Notify.success('Category successfully deleted!', {
        showOnlyTheLastOne: true,
        position: 'right-top',
      });

      refetch();
      toggleModal();
    }

    if (isError) {
      Notify.failure(error.data.message, {
        showOnlyTheLastOne: true,
        position: 'right-top',
      });
    }
  }, [error, isError, isSuccess]);

  return (
    <Box>
      <Button
        icon={TbTrash}
        iconSize={20}
        onClick={handleDelete}
        isLoading={isLoading}
        disabled={isLoading}
      >
        Yes
      </Button>
      <Button
        onClick={handleDeleteModalClose}
        icon={MdNotInterested}
        iconSize={20}
      >
        No
      </Button>
    </Box>
  );
};

export default CategoryDeletePopup;
