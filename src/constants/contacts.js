import path from 'node:path';
//Ініціалізуйте PATH_DB значенням, яке буде зберігати шлях до файлу src/db/db.json
const pathToWorkDir = path.join(process.cwd());
export const PATH_DB = path.join(pathToWorkDir, 'src', 'db', 'db.json');
