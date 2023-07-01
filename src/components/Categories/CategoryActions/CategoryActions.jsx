import { useCallback, useEffect, useState } from 'react';

import { Action, ActionBox } from './CategoryActions.styled';

const actions = ['Edit', 'Delete'];

const CategoryActions = ({ handleModalOpen, toggleActionsOpen }) => {
  const closeActions = useCallback(
    ({ code }) => {
      if (code === 'Escape') {
        toggleActionsOpen();
      }
    },
    [toggleActionsOpen]
  );

  useEffect(() => {
    document.addEventListener('keydown', closeActions);
    return () => document.removeEventListener('keydown', closeActions);
  }, [closeActions, toggleActionsOpen]);

  return (
    <ActionBox>
      {actions.map(action => (
        <Action key={action} onClick={() => handleModalOpen(action)}>
          {action}
        </Action>
      ))}
    </ActionBox>
  );
};

export default CategoryActions;
