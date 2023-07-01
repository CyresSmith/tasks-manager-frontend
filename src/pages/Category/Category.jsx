import Button from 'components/Shared/Button';
import TaskList from 'components/Tasks/TaskList';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import useToggleModal from 'hooks/useToggleModal';

import { FaPlus } from 'react-icons/fa';

import { useCreateTaskMutation, useGetAllTasksQuery } from 'redux/tasksAPI';
import Container from 'components/Shared/Container';
import ButtonPanel from 'components/Shared/ButtonPanel';
import Modal from 'components/Shared/Modal';
import TasksPopup from 'components/Tasks/TasksPopup';

const Category = () => {
  const { categoryId } = useParams();
  const [tasks, setTasks] = useState([]);

  const navigate = useNavigate();
  const { showModal, toggleModal } = useToggleModal();

  const {
    data = [],
    isLoading,
    isSuccess,
    isError,
    error,
    refetch,
  } = useGetAllTasksQuery(categoryId);

  useEffect(() => {
    if (categoryId) {
      refetch();
    }

    setTasks(data);
  }, [data]);

  return (
    <>
      <ButtonPanel>
        <Button icon={FaPlus} iconSize={20} onClick={toggleModal}>
          Create task
        </Button>
      </ButtonPanel>
      <Container>
        <TaskList tasks={tasks} id={categoryId} />
      </Container>
      {showModal && (
        <Modal toggleModal={toggleModal}>
          <TasksPopup toggleModal={toggleModal} />
        </Modal>
      )}
    </>
  );
};

export default Category;
