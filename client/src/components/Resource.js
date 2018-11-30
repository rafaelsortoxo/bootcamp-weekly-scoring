import React, { Component } from 'react';
import * as Resources from './resources';

class Resource extends Component {
  upperCaseFirstLetter(word) {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
  }

  render() {
    // Dynamically select the resource component to load
    const resource = this.upperCaseFirstLetter(this.props.resource);
    const Component = Resources[resource];
    return <Component action={this.props.action} />;
  }
}

export default Resource;
