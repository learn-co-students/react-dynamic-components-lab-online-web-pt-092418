import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    const newVal = ((this.props.opacity * 10) - 1) / 10;
    if (this.props.opacity > .1) {
      return (
          <div className="color-box" style={{opacity: this.props.opacity}}>
            <ColorBox opacity={newVal}/>
          </div>
      );
    } else {
      return null
    }
  }
}
