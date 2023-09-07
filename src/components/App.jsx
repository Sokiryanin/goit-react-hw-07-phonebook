import { nanoid } from 'nanoid';

import { Filter } from './Filter/Filter';
import { ContactsList } from './Contacts.list/ContactsList';
import { Section } from './Seaction/Section';
import { ContactsForm } from './Form/ContactsForm';
import { useEffect, useState } from 'react';

// базові значення  массиву контактів виносимо в окрему змінну

const baseContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contacts, setContacts] = useState(
    // якщо в localStorage нічого немає показуємо базовий массив
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? baseContacts
  );
  const [filter, setFilter] = useState('');

  // зберігаємо контакти в localStorage, прокидуємо в массив залежностей contacts
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = ({ name, number }) => {
    const contact = {
      name,
      number,
      id: nanoid(),
    };

    if (checkContactName(contact.name)) {
      alert(`${contact.name} is already in contacts`);

      return contact.name;
    }

    setContacts([contact, ...contacts]);
  };

  const checkContactName = newName => {
    return contacts.find(({ name }) => name === newName);
  };

  const changeFilter = evt => {
    setFilter(evt.target.value);
  };

  const deleteContact = contactId => {
    setFilter(contacts.filter(contact => contact.id !== contactId));
  };

  const normalizedFilter = filter.toLowerCase();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      <Section title="Phonebook">
        <ContactsForm onSubmit={formSubmitHandler} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChangeFilter={changeFilter} />
        <ContactsList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      </Section>
    </>
  );
}

export default App;
