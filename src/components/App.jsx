import { useState, useEffect } from 'react';
import { ContactForm } from './FormContacts/Form';
import { ListContacts } from './ListContacts/ListContacts';
import { Filter } from './FilterSearch/FilterSearch';
import { GlobalStyle } from 'styles/GlobalStyles';
import { Container, MainTitle, SearchTitle } from './App.styled';

export function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Albus Dumbledore', number: '459-12-56' },
        { id: 'id-2', name: 'Boris Johnson', number: '443-89-12' },
        { id: 'id-3', name: 'Beyonse Knowles', number: '645-17-79' },
        { id: 'id-4', name: 'Bill Gates', number: '227-91-26' },
      ]
    );
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addItemContact = contacts => {
    const { id, name, number } = contacts;
    const itemContact = {
      id,
      name,
      number,
    };

    setContacts(state => [itemContact, ...state]);
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const constNormalizedFilter = filter.toLowerCase();

    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(constNormalizedFilter)
    );

    return filterContacts;
  };

  const onDeleteContact = id => {
    const filterContacts = contacts.filter(contact => contact.id !== id);

    setContacts([...filterContacts]);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm addItemContact={addItemContact} contacts={contacts} />
        <SearchTitle>Contacts</SearchTitle>
        <Filter value={filter} onChangeFilter={changeFilter} />
        <ListContacts
          contacts={getVisibleContacts()}
          onDelete={onDeleteContact}
        />
      </Container>
    </>
  );
}
