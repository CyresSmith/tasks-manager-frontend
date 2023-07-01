import { useEffect } from 'react';
import { useState } from 'react';
import Category from '../Category';

const TaskList = ({ tasks = [] }) => {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    if (tasks.length === 0) {
      return;
    }

    const categories = tasks.reduce((acc, task) => {
      const { category } = task;

      const categories = Object.keys(acc);

      if (!categories.includes(category.name)) {
        acc[category.name] = [task];
      }

      if (categories.includes(category.name)) {
        acc[category.name].push(task);
      }

      return acc;
    }, {});

    setCategories(categories);
  }, [tasks]);

  return (
    <>
      {Object.keys(categories).map(category => (
        <Category key={category} name={category} tasks={categories[category]} />
      ))}
    </>
  );
};

export default TaskList;
