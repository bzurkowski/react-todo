import React from 'react';

import Todo             from '../components/todos/Todo';
import TodoStore        from '../stores/TodoStore'
import * as TodoActions from '../actions/TodoActions'

export default class Todos extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: TodoStore.getAll()
    };
  }

  componentWillMount() {
    TodoStore.on("change", () => {
      this.setState({
        todos: TodoStore.getAll()
      })
    });
  }

  createTodo() {
    const title = document.getElementById("todo-input").value;
    TodoActions.createTodo(title);
  }

  render() {
    const { todos } = this.state;

    const TodoComponents = todos.map((todo) => {
      return <Todo key={todo.id} {...todo}/>
    });

    const todoListStyles = {
      padding: 0,
      marginTop: 50
    };

    return (
      <div>
        <div class="row">
          <div class="input-group">
            <input type="text" id="todo-input" class="form-control" placeholder="What needs to be done?"/>
            <span class="input-group-btn">
              <button class="btn btn-default" type="button" onClick={this.createTodo.bind(this)}>Add</button>
            </span>
          </div>
        </div>

        <div class="row">
          <ul style={todoListStyles}>
            {TodoComponents}
          </ul>
        </div>
      </div>
    );
  }
}
