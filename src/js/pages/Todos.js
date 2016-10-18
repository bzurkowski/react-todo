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

  componentWillUnmount() {
    TodoStore.removeListener("change", this.getTodos);
  }

  createTodo() {
    const input = this.todoInput;
    if (input.value === "") return;
    TodoActions.createTodo(input.value);
    input.value = "";
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
            <input ref={(ref) => this.todoInput = ref } type="text" class="form-control" placeholder="What needs to be done?"/>
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
