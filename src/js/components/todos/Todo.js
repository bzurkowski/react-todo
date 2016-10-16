import React from 'react';

import ItemsList from './todo/ItemsList';

export default class Todo extends React.Component {
  render() {
    const { title, description, items } = this.props;

    return (
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">{title}</h3>
        </div>

        <div class="panel-body">
          {description}
        </div>

        <ItemsList items={items}/>

        <div class="panel-footer"></div>
      </div>
    );
  }
}
