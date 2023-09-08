import React from 'react';
import PropTypes from 'prop-types';

import css from './Filter.module.css';

export const Filter = ({onFilter}) => {
  return (
      <label htmlFor="filter" className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          name="filter"
          id="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onFilter}
        />
      </label>
    );
}


Filter.propTypes = {
  onFilter: PropTypes.func,
};
