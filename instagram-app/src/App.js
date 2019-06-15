import React from 'react';
import './App.css';

import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    };
  }

  componentDidMount() {
    this.setState({ data: dummyData });
  }

  searchHandler = event => {
    const posts = this.state.data.filter(post => {
      if (post.username.includes(event.target.value)) {
        return post;
      }
    });
  };

  render() {
    return (
      <div className='App'>
        <SearchBar searchHandler={this.searchHandler} />
        <PostContainer posts={this.state.data} />
      </div>
    );
  }
}
