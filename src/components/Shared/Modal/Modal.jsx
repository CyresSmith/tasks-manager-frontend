import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

import { CgClose } from 'react-icons/cg';

import { useLockBodyScroll } from 'react-use';
import { useSelector } from 'react-redux';
// import { getMediatype } from 'redux/selectors';

import IconButton from 'components/shared/IconButton';
import { Backdrop, ModalWindow, Title } from './Modal.styled';
import myTheme from 'myTheme';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ toggleModal, showModal, children, title }) => {
  // const mediaType = useSelector(getMediatype);
  const mediaType = 'desktop';

  const closeModal = useCallback(
    ({ code, target, currentTarget }) => {
      if (target === currentTarget || code === 'Escape') {
        toggleModal();
      }
    },
    [toggleModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', closeModal);
    return () => document.removeEventListener('keydown', closeModal);
  }, [closeModal, toggleModal]);

  useLockBodyScroll();

  return createPortal(
    <Backdrop onClick={closeModal}>
      <ModalWindow mediaType={mediaType}>
        <IconButton
          round
          icon={CgClose}
          iconSize={20}
          ariaLabel="close button"
          onClick={toggleModal}
          backgroundColor={myTheme.colors.secondary}
          color={myTheme.colors.primary}
        />
        {title && <Title>{title}</Title>}
        {children}
      </ModalWindow>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
