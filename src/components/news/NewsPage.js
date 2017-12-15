import React from 'react';
import InfiniteScrollerContainer from './InfiniteScrollerContainer';

class NewsPage extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>Latest News</h2>
        <InfiniteScrollerContainer/>
      </div>
    );
  }
}
export default NewsPage;