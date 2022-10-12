import React, { Component } from 'react';
import { ContactForm } from './FormContacts/Form';
import { ListContacts } from './ListContacts/ListContacts';
import { Filter } from './FilterSearch/FilterSearch';
import { GlobalStyle } from 'styles/GlobalStyles';
import { Container, MainTitle, SearchTitle } from './App.styled';

export class App extends Component {
  state = {
    // contacts: [],
    contacts: [
      { id: 'id-1', name: 'Albus Dumbledore', number: '459-12-56' },
      { id: 'id-2', name: 'Elon Musk', number: '443-89-12' },
      { id: 'id-3', name: 'Beyonse Knowles', number: '645-17-79' },
      { id: 'id-4', name: 'Bill Gates', number: '227-91-26' },
    ],
    filter: '',
  };

  addItemContact = ({ id, name, number }) => {
    const itemContact = {
      id,
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [itemContact, ...contacts],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;

    const constNormalizedFilter = filter.toLowerCase();

    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(constNormalizedFilter)
    );

    return filterContacts;
  };

  onDeleteContact = id => {
    const { contacts } = this.state;

    const filterContacts = contacts.filter(contact => contact.id !== id);

    this.setState(() => ({
      contacts: [...filterContacts],
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      // console.log('Обновились контакты');

      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <GlobalStyle />
        <Container>
          <MainTitle>Phonebook</MainTitle>
          <ContactForm
            addItemContact={this.addItemContact}
            contacts={contacts}
          />
          <SearchTitle>Contacts</SearchTitle>
          <Filter value={filter} onChangeFilter={this.changeFilter} />
          <ListContacts
            contacts={visibleContacts}
            onDelete={this.onDeleteContact}
          />
        </Container>
      </>
    );
  }
}
