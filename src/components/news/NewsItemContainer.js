import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InfiniteScroll from 'react-infinite-scroller';
import qwest from 'qwest';
import moment from 'moment';

const imageList = [];
const api = {
    baseUrl: '/newsitem'
};

class NewsItemContainer extends Component {
    constructor(props) {
        
        super(props);
        
        this.state = {
            item: null
        };
        
    }
    
    componentDidMount () {
        
    }
    
    componentWillReceiveProps(nextProps){
        this.getNewsItemData(nextProps.id);
    }
    
    getNewsItemData(newsId) {
        let self = this;
        
        qwest.get(api.baseUrl, {
              id:  newsId
            }, {
                cache: true
            })
            .then(function(xhr, resp) {
                if(resp) {
                    self.setState({
                        item: resp.newsData
                    });
                }
            });  
    }
    
    render() {
        const loader = <div className="loader">Loading nic ...</div>;
        
        // Handle case where the response is not here yet
        if ( !this.state.item ) {
             // Note that you can return false it you want nothing to be put in the dom
             // This is also your chance to render a spinner or something...
             return loader;
        }
        
        let newsItem = this.state.item;
        const storyDate = moment(newsItem.updated.substring(0, 10)).format('LL');
        return (
            <div>
                <div className="newsItem">
                    <div className="newsTitle">{newsItem.title}</div>
                    <div className="newsDate">{storyDate}</div>
                    <div className="newsImage" style={{display: newsItem.image ? 'block' : 'none' }}><img src={newsItem.image} /></div>
                    <div className="newsBody" dangerouslySetInnerHTML={{__html: newsItem.body}}/>
                </div>
                <a href="/news/" className="newsLinkButton">Latest news</a>
            </div>
        );
    }
}
export default NewsItemContainer;