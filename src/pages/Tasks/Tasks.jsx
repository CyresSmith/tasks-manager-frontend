import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { FaPlus } from 'react-icons/fa';

import useToggleModal from 'hooks/useToggleModal';
import { useGetAllTasksQuery } from 'redux/tasksAPI';
import { useGetAllCategoriesQuery } from 'redux/categoriesAPI';
import { useCreateTaskMutation } from 'redux/tasksAPI';

import TaskList from 'components/Tasks/TaskList';
import Container from 'components/Shared/Container';
import ButtonPanel from 'components/Shared/ButtonPanel';
import Modal from 'components/Shared/Modal';
import TasksPopup from 'components/Tasks/TasksPopup';
import Button from 'components/Shared/Button';
import EmptyListMessage from 'components/Shared/EmptyListMessage';
import Section from 'components/Shared/Section';

const Tasks = () => {
  const { categoryId = null } = useParams();
  const [tasks, setTasks] = useState([]);
  const { showModal, toggleModal } = useToggleModal();

  const { data, isLoading, isSuccess, isError, error, refetch } =
    useGetAllTasksQuery(categoryId, { refetchOnMountOrArgChange: true });

  const { data: categories } = useGetAllCategoriesQuery(null, {
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    if (!data) {
      return;
    }

    setTasks(data);
  }, [data]);

  return (
    <>
      <ButtonPanel>
        {categories.length > 0 && (
          <Button icon={FaPlus} iconSize={20} onClick={toggleModal}>
            Create task
          </Button>
        )}
      </ButtonPanel>
      <Container>
        {tasks.length === 0 && (
          <Section>
            <EmptyListMessage>Tasks list is empty</EmptyListMessage>
          </Section>
        )}
        {tasks.length > 0 && <TaskList tasks={tasks} id={null} />}
      </Container>
      {showModal && (
        <Modal toggleModal={toggleModal} title="Create new task">
          <TasksPopup
            toggleModal={toggleModal}
            refetch={refetch}
            actionHook={useCreateTaskMutation}
            btnIcon={FaPlus}
            btnText="Create Task"
          />
        </Modal>
      )}
    </>
  );
};

export default Tasks;
