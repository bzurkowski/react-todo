import { EventEmitter } from 'events';

class TodoStore extends EventEmitter {
  constructor() {
    super();

    this.todos = [
      {
        id: 123456789,
        title: "Todo #1",
        description: "Todo #1 description",
        items: [
          {
            id: 123456789,
            description: "Todo Item #1",
            completed: 0
          },

          {
            id: 234567890,
            description: "Todo Item #2",
            completed: 1
          },

          {
            id: 345678901,
            description: "Todo Item #3",
            completed: 0
          }
        ]
      },

      {
        id: 234567890,
        title: "Todo #1",
        description: "Todo #1 description",
        items: [
          {
            id: 123456789,
            description: "Todo Item #1",
            completed: 0
          },

          {
            id: 234567890,
            description: "Todo Item #2",
            completed: 1
          },

          {
            id: 345678901,
            description: "Todo Item #3",
            completed: 0
          }
        ]
      }
    ];
  }

  getAll() {
    return this.todos;
  }

  createTodo(title, description) {
    const id = Date.now();

    this.todos.push(
      {
        id,
        title,
        description
      }
    );
  }
}

const todoStore = new TodoStore;

export default todoStore;
