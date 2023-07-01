import { Link } from 'react-router-dom';

import {
  Task,
  TaskName,
  Info,
  Desc,
  DateBox,
  TaskDate,
} from './TaskItem.styled';

const TaskItem = ({ task }) => {
  return (
    <Task>
      <Link to={`/tasks/${task.id}`}>
        <TaskName>{task.name}</TaskName>

        <Info>
          <DateBox>
            <TaskDate>
              Started: {new Date(task.dateStart).toLocaleDateString()}
            </TaskDate>
            <TaskDate>
              Finish: {new Date(task.dateEnd).toLocaleDateString()}
            </TaskDate>
          </DateBox>
          <Desc>{task.desc}</Desc>
        </Info>
      </Link>
    </Task>
  );
};

export default TaskItem;
