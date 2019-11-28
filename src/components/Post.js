import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
  state = {
    post: null
  }
  componentDidMount() {
    const id = this.props.match.params.post_id;
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(post => {
        this.setState({
          post: post.data
        });
      });
  }
  render() {
    const { post } = this.state;
    const postContent = post ?
          (
              <div className="post">
                <h4 className="center">{post.title}</h4>
                <p>{post.body}</p>
              </div>
          ):
          (<div className="center">No post ---!</div>);
    return(
      <div className="container">
        {postContent}
      </div>
    );
  }
}

export default Post;
