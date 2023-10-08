import { useDispatch, useSelector } from 'react-redux';
import { DeleteButton, List } from './ContactsList.styled';
import { selectVisibleContacts } from 'redux/selectors';

import { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'redux/operations';

export const ContactsList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>{name} </p>
          <p>{number}</p>
          <DeleteButton
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete contact
          </DeleteButton>
        </li>
      ))}
    </List>
  );
};
