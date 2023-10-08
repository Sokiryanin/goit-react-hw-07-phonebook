import { useDispatch, useSelector } from 'react-redux';
import { DeleteButton, List } from './ContactsList.styled';
import { selectVisibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

export const ContactsList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>{name} </p>
          <p>{number}</p>
          <DeleteButton
            type="button"
            onClick={() => dispatch(deleteContact(id))}>
            Delete contact
          </DeleteButton>
        </li>
      ))}
    </List>
  );
};
