import { DB } from "sqlite";

const db = new DB("todo.db");

db.execute(`
  CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    completed INTEGER
  )
`);

export { db };
