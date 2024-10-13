# Deno Todo API

This is a simple CRUD API for a Todo application built with Deno, Oak, and SQLite.

## Prerequisites

- [Deno](https://deno.land/) installed on your machine

## Getting Started

1. Clone this repository:   ```
   git clone https://github.com/yourusername/deno-todo-api.git
   cd deno-todo-api   ```

2. Run the server:   ```
   deno run --allow-net --allow-read --allow-write --unstable --import-map=import_map.json src/server.ts   ```

   The server will start on `http://localhost:8000`.

## API Endpoints

- `GET /todos`: Get all todos
- `GET /todos/:id`: Get a specific todo by ID
- `POST /todos`: Create a new todo
- `PUT /todos/:id`: Update an existing todo
- `DELETE /todos/:id`: Delete a todo

## Running Tests

To run the tests, use the following command:

```
## Project Structure

- `src/`: Contains the source code
  - `db.ts`: Database connection and initialization
  - `todo.ts`: Todo model and CRUD operations
  - `server.ts`: API server and routes
- `tests/`: Contains test files
  - `todo_test.ts`: Tests for Todo model
- `import_map.json`: Import map for managing dependencies
- `README.md`: Project documentation
- `deno.json`: Deno configuration file

## Running the Project

To run the server:
