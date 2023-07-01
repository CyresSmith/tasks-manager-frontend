import { useEffect } from 'react';
import { useState } from 'react';

import { useParams } from 'react-router-dom';
import { useGetTaskByIdQuery, useUpdateTaskMutation } from 'redux/tasksAPI';

import { TbEditCircle, TbTrash } from 'react-icons/tb';

import Section from 'components/Shared/Section';
import TaskInfo from 'components/Task/TaskInfo';
import Category from 'components/Task/Category';
import Author from 'components/Task/Author';
import Spinner from 'components/Shared/Spinner';
import Button from 'components/Shared/Button';

import { TaskBox } from './Task.styled';
import ButtonPanel from 'components/Shared/ButtonPanel';

import TaskDeletePopup from 'components/Tasks/TaskDeletePopup';
import Modal from 'components/Shared/Modal';
import useToggleModal from 'hooks/useToggleModal';
import TasksPopup from 'components/Tasks/TasksPopup';

const Task = () => {
  const { taskId } = useParams();
  const { showModal, toggleModal } = useToggleModal();

  const [task, setTask] = useState({});
  const [actionType, setActionType] = useState(null);

  const { data, isLoading, isSuccess, isError, error } =
    useGetTaskByIdQuery(taskId);

  const handleModalOpen = e => {
    setActionType(e.target.innerText);
    toggleModal();
  };

  useEffect(() => {
    if (!data) {
      return;
    }

    setTask(data);
  }, [data]);

  return (
    <>
      <ButtonPanel>
        <Button icon={TbTrash} iconSize={20} onClick={handleModalOpen}>
          Delete
        </Button>
        <Button icon={TbEditCircle} iconSize={20} onClick={handleModalOpen}>
          Edit
        </Button>
      </ButtonPanel>
      <Section>
        {isLoading && <Spinner />}

        {task.id && (
          <TaskBox>
            <TaskInfo task={task} />
            <Category category={task.category} />
            <Author author={task.author} />
          </TaskBox>
        )}
      </Section>

      {showModal && (
        <Modal
          title={
            actionType === 'Delete'
              ? `Do you want delete task "${task.name}" ?`
              : 'Edit task'
          }
          toggleModal={toggleModal}
        >
          {actionType === 'Delete' && (
            <TaskDeletePopup id={taskId} toggleModal={toggleModal} />
          )}
          {actionType === 'Edit' && (
            <TasksPopup
              toggleModal={toggleModal}
              refetch={null}
              task={task}
              actionHook={useUpdateTaskMutation}
              btnIcon={TbEditCircle}
              btnText="Change task"
            />
          )}
        </Modal>
      )}
    </>
  );
};

export default Task;
