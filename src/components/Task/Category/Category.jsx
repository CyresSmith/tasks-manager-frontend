import { Box } from './Category.styled';

const Category = ({ category }) => {
  return (
    <Box>
      <h3>Category</h3>
      <p>
        <span>name: {category.name}</span>
        <span>
          Created: {new Date(category.dateCreated).toLocaleDateString()}
        </span>
      </p>
    </Box>
  );
};

export default Category;
