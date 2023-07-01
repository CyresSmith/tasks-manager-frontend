import React from 'react';
import TaskItem from '../TaskItem';
import { CategorySection, CategoryList, CategoryName } from './Category.styled';

const Category = ({ name, tasks }) => {
  return (
    <CategorySection>
      <CategoryName>{name}</CategoryName>
      <CategoryList>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </CategoryList>
    </CategorySection>
  );
};

export default Category;
