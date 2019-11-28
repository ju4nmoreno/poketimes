import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    console.log(this.props);
    const { posts } = this.props;
    const postsList = posts.length ? (
      posts.map(
        post => (
          <div className="post card" key={post.id}>
            <img alt={post.title} src={Pokeball}/>
            <div className="card-content">
              <Link to={`/${post.id}`}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      )
    ) :
    (<div className="center">No posts Yet...</div>);
    return(
      <div className="container">
        <h2 className="center">Home page</h2>
        {postsList}
      </div>
    );
  }
};
const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
};
export default connect(mapStateToProps)(Home);
