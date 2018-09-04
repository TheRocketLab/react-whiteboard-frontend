import React, { Component } from 'react';

import { Wrapper } from './style';

class People extends Component {
  render() {
    return <Wrapper>{this.props.name}</Wrapper>;
  }
}

export default People;
