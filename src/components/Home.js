import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Pokeball from '../pokeball.png';

class Home extends Component {
  state = {
    posts: []
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
         .then(res => {
           console.log(res);
           this.setState({
             posts: res.data.slice(0, 10)
           })
         })
  }
  render() {
    const { posts } = this.state;
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

export default Home;
