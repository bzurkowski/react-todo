import React from 'react';
import { Link } from 'react-router'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>This is so cool!</h1>
        {this.props.children}
        <Link to="todos">Todos</Link>
        <Link to="settings">Settings</Link>
      </div>
    );
  }
}
