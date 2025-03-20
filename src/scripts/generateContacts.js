import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

let newContactsList;

const generateContacts = async (number) => {
  try {
    newContactsList = await readContacts();
  } catch (error) {
    console.log('Ошибка:', error);
  }

  for (let i = 0; i < number; i++) {
    newContactsList.push(createFakeContact());
  }
  await writeContacts(newContactsList);
};

generateContacts(5);
