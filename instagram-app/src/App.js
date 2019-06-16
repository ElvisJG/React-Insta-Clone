import React from 'react';
import './App.css';

import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filteredData: []
    };
  }

  componentDidMount() {
    this.setState({ data: dummyData });
  }

  // searchHandler = event => {
  //   const data = this.state.posts.filter(post => {
  //     if (post.username.includes(event.target.value)) {
  //       return post;
  //     }
  //   });
  //   this.setState({ filteredData: data });
  // };

  searchPostsHandler = e => {
    const posts = this.state.posts.filter(p => {
      if (p.username.includes(e.target.value)) {
        return p;
      }
    });
    this.setState({ filteredData: posts });
  };

  render() {
    return (
      <div className='App'>
        <SearchBar
          searchHandler={this.searchPostsHandler}
          searchTerm={this.state.searchTerm}
        />
        <PostContainer
          data={
            this.state.filteredData.length > 0
              ? this.state.filteredPosts
              : this.state.posts
          }
        />
      </div>
    );
  }
}
