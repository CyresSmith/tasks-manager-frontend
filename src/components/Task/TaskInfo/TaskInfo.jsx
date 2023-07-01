import { Title, TaskDate, Desc, Box } from './TaskInfo.styled';

const TaskInfo = ({ task }) => {
  return (
    <Box>
      <Title>{task.name.toUpperCase()}</Title>
      <TaskDate>
        <span>Created: {new Date(task.createdAt).toLocaleDateString()}</span>
        <span>Start date: {new Date(task.dateStart).toLocaleDateString()}</span>
        <span>Finish: {new Date(task.dateEnd).toLocaleDateString()}</span>
      </TaskDate>
      <Desc>
        <h3>Description</h3>
        <p>{task.desc}</p>
      </Desc>
    </Box>
  );
};

export default TaskInfo;
