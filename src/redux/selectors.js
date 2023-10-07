import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.list;

export const getFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
