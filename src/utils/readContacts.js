import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const parsedData = JSON.parse(data);
    if (!Array.isArray(parsedData)) {
      return []; // Возвращаем пустой массив
    }
    return parsedData; // Возвращаем массив контактов
  } catch (err) {
    console.error('Помилка читання файлу:', err);
  }
};
