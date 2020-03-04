import React, { Component } from 'react';
import CommentBox from './CommentBox';
import Comments from './Comments';
import './style.css';

class CommentsContainer extends Component {
  constructor(props) {
    super(props);

    this.handleAddComment = this.handleAddComment.bind(this);
    this.state = {
      comments: []
    }
  }

  componentDidMount() {
    /* global Ably */
    const channel = Ably.channels.get('comments');
   
    channel.attach();
      channel.once('attached', () => {
        channel.history((err, page) => {
          /* create a new array with comments */
          const comments = Array.from(page.items, item => item.data);

          this.setState({ comments });

          /* subscribe to new comments */
          channel.subscribe((msg, err) => {
            const commentObject = msg['data'];
            this.handleAddComment(commentObject);
          });
        });
      });
  }

  handleAddComment(comment) {
    this.setState(prevState => {
      return {
        comments: [comment].concat(prevState.comments)
      };
    });
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
            <img className='graphics' src={require('./iconAsset/connect_graphic.svg')} alt="icon for user" />
              <CommentBox className='comment_form'handleAddComment={this.handleAddComment} />
              <Comments comments={this.state.comments} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default CommentsContainer;