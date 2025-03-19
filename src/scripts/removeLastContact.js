import { getAllContacts } from './getAllContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    let contactsList = await getAllContacts();
    if (Array.isArray(contactsList) && contactsList.length > 0) {
      contactsList.pop();
      await writeContacts(contactsList);
    }
  } catch (error) {
    console.log('Ошибка:', error);
  }
};

removeLastContact();
