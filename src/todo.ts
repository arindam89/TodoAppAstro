import { db } from "./db.ts";

export interface Todo {
  id?: number;
  title: string;
  completed: boolean;
}

export const TodoModel = {
  async getAll(): Promise<Todo[]> {
    const rows = db.queryEntries<Todo>("SELECT * FROM todos");
    return rows.map((row) => ({
      ...row,
      completed: Boolean(row.completed),
    }));
  },

  async getById(id: number): Promise<Todo | null> {
    const row = db.queryEntries<Todo>("SELECT * FROM todos WHERE id = ?", [id])[0];
    if (!row) return null;
    return {
      ...row,
      completed: Boolean(row.completed),
    };
  },

  async create(todo: Omit<Todo, "id">): Promise<Todo> {
    const { lastInsertRowid } = db.query(
      "INSERT INTO todos (title, completed) VALUES (?, ?)",
      [todo.title, Number(todo.completed)]
    );
    return { ...todo, id: Number(lastInsertRowid) };
  },

  async update(id: number, todo: Partial<Todo>): Promise<Todo | null> {
    const existingTodo = await this.getById(id);
    if (!existingTodo) return null;

    const updatedTodo = { ...existingTodo, ...todo };
    db.query(
      "UPDATE todos SET title = ?, completed = ? WHERE id = ?",
      [updatedTodo.title, Number(updatedTodo.completed), id]
    );

    return updatedTodo;
  },

  async delete(id: number): Promise<boolean> {
    const { affectedRows } = db.query("DELETE FROM todos WHERE id = ?", [id]);
    return affectedRows > 0;
  },
};
