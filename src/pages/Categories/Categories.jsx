import { useState } from 'react';
import { useEffect } from 'react';
import { useGetAllCategoriesQuery } from 'redux/categoriesAPI';

import { FaPlus } from 'react-icons/fa';

import useToggleModal from 'hooks/useToggleModal';

import Section from 'components/Shared/Section';
import Modal from 'components/Shared/Modal';
import Button from 'components/Shared/Button';
import CategoryList from 'components/Categories/CategoryList';
import CategoryAddPopup from 'components/Categories/CategoryAddPopup';
import ButtonPanel from 'components/Shared/ButtonPanel';

const Categories = () => {
  const { showModal, toggleModal } = useToggleModal();
  const [categories, setCategories] = useState([]);

  const { data, isLoading, isError, isFetching, isSuccess, refetch } =
    useGetAllCategoriesQuery(null, { refetchOnMountOrArgChange: true });

  useEffect(() => {
    if (isSuccess) {
      setCategories(data);
    }
  }, [data]);

  return (
    <>
      <ButtonPanel>
        <Button icon={FaPlus} iconSize={20} onClick={toggleModal}>
          Create category
        </Button>
      </ButtonPanel>
      <Section>
        <CategoryList
          categories={categories}
          isLoading={isLoading}
          refetch={refetch}
        />
        {showModal && (
          <Modal
            toggleModal={toggleModal}
            showModal={showModal}
            title="Create category"
          >
            <CategoryAddPopup refetch={refetch} toggleModal={toggleModal} />
          </Modal>
        )}
      </Section>
    </>
  );
};

export default Categories;
