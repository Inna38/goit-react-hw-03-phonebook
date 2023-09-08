import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

export class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleForm = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onContacts(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <>
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="name" className={css.label}>
            Name
            <input
              className={css.input}
              type="text"
              name="name"
              id="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleForm}
            />
          </label>

          <label htmlFor="tel" className={css.label}>
            Number
            <input
              className={css.input}
              type="tel"
              name="number"
              id="tel"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleForm}
            />
          </label>
          <button className={css.btn} type="submite">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
};
