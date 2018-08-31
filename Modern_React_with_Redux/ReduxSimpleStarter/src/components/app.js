import React, { Component } from 'react';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

// const API_KEY = 'AIzaSyC7IYvTg2DTKesAlBMKdQgc3ywgGhy6gfI';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
