import { getAllContacts } from './getAllContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

let contactsList;

export const addOneContact = async () => {
  try {
    contactsList = await getAllContacts();
  } catch (error) {
    console.log('Ошибка:', error);
  }
  contactsList.push(createFakeContact());
  await writeContacts(contactsList);
};

addOneContact();
