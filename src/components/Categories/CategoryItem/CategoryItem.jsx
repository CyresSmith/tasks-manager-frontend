import { useEffect, useState } from 'react';

import { useGetAllTasksQuery } from 'redux/tasksAPI';
import useToggleModal from 'hooks/useToggleModal';

import Modal from 'components/Shared/Modal';
import CategoryEditPopup from '../CategoryEditPopup';
import CategoryDeletePopup from '../CategoryDeletePopup';
import TaskList from './Tasks/TaskList';
import CategoryInfo from './CategoryInfo';

import { CategoryBox } from './CategoryItem.styled';

const CategoryItem = ({ category, refetch }) => {
  const [actionsOpen, setActionsOpen] = useState(false);
  const { showModal, toggleModal } = useToggleModal();
  const [actionType, setActionType] = useState(null);
  const [tasksOpen, setTasksOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error,
    refetch: refetchTasks,
  } = useGetAllTasksQuery(category.id, { refetchOnMountOrArgChange: true });

  const toggleActionsOpen = () => setActionsOpen(prev => !prev);
  const toggleTasksOpen = () => setTasksOpen(prev => !prev);

  const handleModalOpen = action => {
    setActionType(action);
    toggleActionsOpen();
    toggleModal();
  };

  useEffect(() => {
    if (!data) {
      return;
    }

    setTasks(data);
  }, [data]);

  return (
    <>
      <CategoryBox>
        <CategoryInfo
          category={category}
          tasksCount={tasks.length}
          handleModalOpen={handleModalOpen}
          toggleActionsOpen={toggleActionsOpen}
          actionsOpen={actionsOpen}
          toggleTasksOpen={toggleTasksOpen}
          tasksOpen={tasksOpen}
        />
        {tasksOpen && <TaskList tasks={tasks} />}
      </CategoryBox>

      {showModal && (
        <Modal
          title={
            actionType === 'Edit'
              ? 'Edit Category'
              : 'Do you want delete this category ?'
          }
          toggleModal={toggleModal}
        >
          {actionType === 'Edit' && (
            <CategoryEditPopup
              refetch={refetch}
              toggleModal={toggleModal}
              id={category.id}
            />
          )}

          {actionType === 'Delete' && (
            <CategoryDeletePopup
              setActionType={setActionType}
              toggleModal={toggleModal}
              id={category.id}
              refetch={refetch}
            />
          )}
        </Modal>
      )}
    </>
  );
};

export default CategoryItem;
