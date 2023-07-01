import EmptyListMessage from 'components/Shared/EmptyListMessage';
import Spinner from 'components/Shared/Spinner';
import CategoryItem from '../CategoryItem';
import { CategoryListBox } from './CategoryList.styled';

const CategoryList = ({ categories, isLoading, refetch }) => {
  return (
    <>
      {isLoading && <Spinner />}

      {!isLoading && categories.length === 0 && (
        <EmptyListMessage>Categories list is empty!</EmptyListMessage>
      )}

      {!isLoading && categories.length > 0 && (
        <CategoryListBox>
          {categories.map(category => (
            <CategoryItem
              key={category.id}
              category={category}
              refetch={refetch}
            />
          ))}
        </CategoryListBox>
      )}
    </>
  );
};

export default CategoryList;
