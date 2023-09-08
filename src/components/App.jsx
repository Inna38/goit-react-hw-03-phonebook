import React from 'react';
import { nanoid } from 'nanoid';
import { Component } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

const LOCAL_KEY = "contacts"

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(LOCAL_KEY, JSON.stringify(this.state.contacts))
  }
  }
  
  componentDidMount() {
    if (localStorage.getItem(LOCAL_KEY) !== null) {
      this.setState({
       contacts: JSON.parse(localStorage.getItem(LOCAL_KEY))
      })
    }
  }

  handleContacts = user => {
    const userContact = this.state.contacts.find(
      contact => contact.name === user.name
    );
    if (userContact) {
      alert(`${user.name} is already in contacts.`);
      return;
    }
    this.setState(prev => ({
      contacts: [...prev.contacts, { ...user, id: nanoid() }],
    }));
  };

  handleFilter = e => {
      this.setState({
      filter: e.target.value,
    });
  };

  deleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const filterContact = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onContacts={this.handleContacts} />

        <h2>Contacts</h2>
        <Filter onFilter={this.handleFilter} />
      
        <ContactList
          contacts={filterContact}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
