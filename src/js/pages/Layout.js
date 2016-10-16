import React from 'react';

import Nav from '../components/layout/Nav'

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Nav/>

        <div class="container">
          <div class="col-md-6 col-md-offset-3">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
