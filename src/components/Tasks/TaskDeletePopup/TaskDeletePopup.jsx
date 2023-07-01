import { useEffect } from 'react';
import { Notify } from 'notiflix';

import { TbTrash } from 'react-icons/tb';
import { MdNotInterested } from 'react-icons/md';

import Button from 'components/Shared/Button';

import { Box } from './TaskDeletePopup.styled';
import { useDeleteTaskMutation } from 'redux/tasksAPI';
import { useLocation, useNavigate } from 'react-router-dom';

const TaskDeletePopup = ({ toggleModal, id }) => {
  const [
    deleteTask,
    { isLoading, isSuccess, isError, error, isUninitialized },
  ] = useDeleteTaskMutation();

  const handleDelete = async () => {
    await deleteTask(id);
  };

  const location = useLocation();
  const navigate = useNavigate();

  const handleDeleteModalClose = () => {
    toggleModal();
  };

  useEffect(() => {
    if (isSuccess) {
      Notify.success('Task successfully deleted!', {
        showOnlyTheLastOne: true,
        position: 'right-top',
      });

      // refetch();
      // toggleModal();

      if (location.pathname === `/tasks/${id}`) {
        navigate('/tasks');
      }
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

export default TaskDeletePopup;
