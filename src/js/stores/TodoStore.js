import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

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

  createTodo(title) {
    const id = Date.now();

    this.todos.push(
      {
        id,
        title,
        description: null,
        items: []
      }
    );

    this.emit("change");
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_TODO": {
        this.createTodo(action.title);
      }
    }
    console.log("Received action!", action);
  }
}

const todoStore = new TodoStore;

dispatcher.register(todoStore.handleActions.bind(todoStore));
window.dispatcher = dispatcher;

export default todoStore;
