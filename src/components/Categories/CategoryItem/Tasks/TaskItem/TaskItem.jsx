import React from 'react';
import { Link } from 'react-router-dom';
import { Task, TaskInfo, TaskName } from './TaskItem.styled';

const TaskItem = ({ task }) => {
  return (
    <Task>
      <Link to={`/tasks/${task.id}`}>
        <TaskInfo>
          <TaskName>{task.name}</TaskName>
          <span>Start: {new Date(task.dateStart).toLocaleDateString()}</span>
          <span>End: {new Date(task.dateEnd).toLocaleDateString()}</span>
        </TaskInfo>
      </Link>
    </Task>
  );
};

export default TaskItem;
