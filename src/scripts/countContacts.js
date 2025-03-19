import { getAllContacts } from './getAllContacts.js';

export const countContacts = async () => {
  try {
    const contactsList = await getAllContacts();
    return contactsList?.length;
  } catch (error) {
    console.log('Ошибка:', error);
  }
};

console.log(await countContacts());
