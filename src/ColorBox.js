import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {

        //have to use tenary syntax condition to work
        //   function renderStyle() {
        //     <div className="color-box" style={{opacity: 2}}>
        //
        //         if(this.props.opacity >= 0.2) {
        //           return (
        //             <div className="color-box" style={{opacity: this.props.opacity}}>
        //           );
        //         } else {
        //             return null;
        //           }
        //     </div>
        // }

      return (
        <div className="color-box" style={{opacity: this.props.opacity}}>
          {this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1} /> : null}
        </div>
      )
    }
}
