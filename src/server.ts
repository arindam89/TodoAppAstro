import { Application, Router } from "oak";
import { TodoModel, Todo } from "./todo.ts";

const router = new Router();

router
  .get("/todos", async (ctx) => {
    ctx.response.body = await TodoModel.getAll();
  })
  .get("/todos/:id", async (ctx) => {
    const id = parseInt(ctx.params.id!);
    const todo = await TodoModel.getById(id);
    if (todo) {
      ctx.response.body = todo;
    } else {
      ctx.response.status = 404;
      ctx.response.body = { message: "Todo not found" };
    }
  })
  .post("/todos", async (ctx) => {
    const { title, completed } = await ctx.request.body().value;
    const todo = await TodoModel.create({ title, completed });
    ctx.response.status = 201;
    ctx.response.body = todo;
  })
  .put("/todos/:id", async (ctx) => {
    const id = parseInt(ctx.params.id!);
    const { title, completed } = await ctx.request.body().value;
    const updatedTodo = await TodoModel.update(id, { title, completed });
    if (updatedTodo) {
      ctx.response.body = updatedTodo;
    } else {
      ctx.response.status = 404;
      ctx.response.body = { message: "Todo not found" };
    }
  })
  .delete("/todos/:id", async (ctx) => {
    const id = parseInt(ctx.params.id!);
    const deleted = await TodoModel.delete(id);
    if (deleted) {
      ctx.response.status = 204;
    } else {
      ctx.response.status = 404;
      ctx.response.body = { message: "Todo not found" };
    }
  });

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

const port = 8000;
console.log(`Server running on http://localhost:${port}`);
await app.listen({ port });
