import React from 'react';

import Todo from '../components/todos/Todo';

export default class Todos extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [
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
      ]
    };
  }

  render() {
    const { todos } = this.state;

    const TodoComponents = todos.map((todo) => {
      return <Todo key={todo.id} {...todo}/>
    });

    return (
      <div>
        <h1>Todo</h1>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}
