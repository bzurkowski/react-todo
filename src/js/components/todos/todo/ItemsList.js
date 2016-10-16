import React from 'react';

import Item from './Item';

export default class ItemsList extends React.Component {
  render() {
    const { items } = this.props;

    const ItemComponents = items.map((item) => {
      return <Item key={item.id} {...item}/>;
    });

    return (
      <ul class="list-group">
        {ItemComponents}

        <li class="list-group-item">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="What needs to be done?"/>
            <span class="input-group-btn">
              <button class="btn btn-default" type="button">Add</button>
            </span>
          </div>
        </li>
      </ul>
    );
  }
}
