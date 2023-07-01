import { Link, useNavigate } from 'react-router-dom';

import { TbEditCircle, TbChevronDown, TbChevronUp } from 'react-icons/tb';

import IconButton from 'components/Shared/IconButton';

import { CategoryName, CategoryDate, TasksCount } from './CategoryInfo.styled';
import { InfoBox } from './CategoryInfo.styled';
import CategoryActions from 'components/Categories/CategoryActions';

const CategoryInfo = ({
  category,
  tasksCount,
  toggleActionsOpen,
  actionsOpen,
  handleModalOpen,
  toggleTasksOpen,
  tasksOpen,
}) => {
  const navigate = useNavigate();

  const setDate = () => {
    if (category.dateUpdated > category.dateCreated) {
      return (
        <CategoryDate>
          Updated: {new Date(category.dateUpdated).toLocaleString()}
        </CategoryDate>
      );
    }

    return (
      <CategoryDate>
        Created: {new Date(category.dateCreated).toLocaleString()}
      </CategoryDate>
    );
  };

  return (
    <InfoBox>
      <span>
        <Link to={`/tasks/category/${category.id}`}>
          <CategoryName>{category.name}</CategoryName>
        </Link>
        <TasksCount>Tasks:{tasksCount}</TasksCount>
        {setDate()}
      </span>

      <div>
        <div style={{ position: 'relative' }}>
          {tasksCount > 0 && (
            <IconButton
              round
              icon={tasksOpen ? TbChevronUp : TbChevronDown}
              iconSize={20}
              onClick={toggleTasksOpen}
            />
          )}

          <IconButton
            round
            icon={TbEditCircle}
            iconSize={20}
            onClick={toggleActionsOpen}
          />

          {actionsOpen && (
            <CategoryActions
              actionsOpen={actionsOpen}
              handleModalOpen={handleModalOpen}
              toggleActionsOpen={toggleActionsOpen}
              id={category.id}
            />
          )}
        </div>
      </div>
    </InfoBox>
  );
};

export default CategoryInfo;
