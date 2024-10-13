import { assertEquals } from "testing/asserts.ts";
import { TodoModel, Todo } from "../src/todo.ts";

Deno.test("TodoModel CRUD operations", async (t) => {
  await t.step("create todo", async () => {
    const todo: Omit<Todo, "id"> = { title: "Test Todo", completed: false };
    const createdTodo = await TodoModel.create(todo);
    assertEquals(typeof createdTodo.id, "number");
    assertEquals(createdTodo.title, todo.title);
    assertEquals(createdTodo.completed, todo.completed);
  });

  // ... rest of the test cases
});
