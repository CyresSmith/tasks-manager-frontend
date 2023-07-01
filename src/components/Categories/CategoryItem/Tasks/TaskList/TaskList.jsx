import React from 'react';
import TaskItem from '../TaskItem';
import { TasksList } from './TaskList.styled';

const TaskList = ({ tasks }) => {
  return (
    <TasksList>
      {tasks.map(task => (
        <TaskItem task={task} key={task.id} />
      ))}
    </TasksList>
  );
};

export default TaskList;
