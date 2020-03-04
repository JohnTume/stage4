import React, { Component } from 'react';
import './style.css'
class Comment extends Component {
  generateNum() {
    return Math.floor(Math.random() * 23) + 1
  }

  render() {
    const divStyle = {
      padding:'1px',
      border: '3px solid black'
    };
    return (
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img src={require('./iconAsset/i' + this.generateNum() + '.jpg')} style={divStyle} alt="snoopy user icon" />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{this.props.comment.name}</strong>
              <br />
              {this.props.comment.comment}
            </p>
          </div>
        </div>
      </article>
    );
  }
}

export default Comment;