import React from 'react';

export default class Item extends React.Component {
  render() {
    const { description } = this.props;

    return (
      <li class="list-group-item">
        {description}
        <button type="button" class="close"><span aria-hidden="true">&times;</span></button>
      </li>
    );
  }
}
