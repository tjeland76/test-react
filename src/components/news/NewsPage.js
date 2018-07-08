import React from 'react';
import InfiniteScrollerContainer from './InfiniteScrollerContainer';
import NewsItemContainer from './NewsItemContainer';
import queryString from 'query-string';

class NewsPage extends React.Component {
    
    constructor(props) {
        
        super(props);

        this.state = {
            loadAll: false,
            newsId: null
        };
        
    }
    
    componentDidMount () {        
        this.setDisplayMode();
    }
    
    componentWillReceiveProps(nextProps){
        this.setDisplayMode();
    }
    
    setDisplayMode() {
        const parsedQuerystring = queryString.parse(location.search);
        if (!parsedQuerystring.id) {
            this.setState({
                loadAll:true
            });
            
        } else {
            this.setState({
                newsId: parsedQuerystring.id
            });
        }
    }
    
    render() {
        
        return (
            <div className="container">
                <h2>Latest News</h2>
                {this.state.loadAll ? <InfiniteScrollerContainer /> : <NewsItemContainer id={this.state.newsId} />}
            </div>
        );
	}
}
export default NewsPage;