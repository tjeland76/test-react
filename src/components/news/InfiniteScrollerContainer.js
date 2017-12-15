import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InfiniteScroll from 'react-infinite-scroller';
import qwest from 'qwest';
import moment from 'moment';

const imageList = [];
const api = {
    baseUrl: '/newsfeed',
    page_size: 10
};

class InfiniteScrollerContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tracks: [],
            hasMoreItems: true,
            index: 0
        };
        
        this.loadItems = this.loadItems.bind(this);
    }

    loadItems(page) {
        let self = this;
        
        qwest.get(api.baseUrl, {
              index:  self.state.index,
              page_size: api.page_size
            }, {
                cache: true
            })
            .then(function(xhr, resp) {
                if(resp) {
                    let tracks = self.state.tracks;
                    resp.newsData.map((track) => {
                        tracks.push(track);
                    });

                    if(resp.moreItems) {
                        self.setState({
                            tracks: tracks,
                            index: resp.index
                        });
                    } else {
                        self.setState({
                            hasMoreItems: false
                        });
                    }
                }
            });

    }

    render() {
        const loader = <div className="loader">Loading ...</div>;

        let items = [];
        this.state.tracks.map((track, i) => {
            const storyDate = moment(track.updated.substring(0, 10)).format('LL'); 
            items.push(
                <div className="newsItem" key={i}>
                    <div className="newsTitle">{track.title}</div>
                    <div className="newsDate">{storyDate}</div>
                    <div className="newsImage" style={{display: track.image ? 'block' : 'none' }}><img src={track.image} /></div>
                    <div className="newsBody" dangerouslySetInnerHTML={{__html: track.body}}/>
                </div>
            );
        });

        return (
            <InfiniteScroll
                pageStart={0}
                loadMore={this.loadItems}
                hasMore={this.state.hasMoreItems}
                loader={loader}>

                <div className="tracks">
                    {items}
                </div>
            </InfiniteScroll>
        );
    }
}
export default InfiniteScrollerContainer;