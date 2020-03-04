import React, { Component } from 'react';
import Comment from './Comment';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'react-bootstrap';
class Comments extends Component {
  state = {
    profileExist: false
  }

  render() {
    const {loading} = this.state;
    return (
      <section className="section">
        {
          this.props.comments.map((comment, index) => {
            return <Comment key={index} comment={comment} />
          })
        }
      </section>
    );
  }
}

export default Comments;