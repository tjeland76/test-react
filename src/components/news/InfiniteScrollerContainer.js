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
            index: 1
        };

        this.loadItems = this.loadItems.bind(this);
    }

    loadItems(page) {
        let self = this;

        if (!self.state.hasMoreItems) {
          return;
        }

        qwest.get(api.baseUrl, {
              index:  self.state.index,
              page_size: api.page_size
            }, {
                cache: true
            })
            .then(function(xhr, resp) {
              console.log(resp);
                if(resp) {
                    let tracks = self.state.tracks;
                    let moreItems = false;
                    resp.data.map((track) => {
                        tracks.push(track);
                    });

                    moreItems = (self.state.index * api.page_size) < resp.meta.total;

                    if(moreItems) {
                        self.setState({
                            tracks: tracks,
                            index: self.state.index + 1
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
            const storyDate = moment(track.attributes.date.substring(0, 10)).format('LL');
            items.push(
                <div className="newsItem" key={i}>
                    <div className="newsTitle">{track.attributes.title}</div>
                    <div className="newsDate">{storyDate}</div>
                    <div className="newsImage" style={{display: track.attributes.image.url ? 'block' : 'none' }}><img src={track.attributes.image.url} /></div>
                    <div className="newsBody" dangerouslySetInnerHTML={{__html: track.attributes.body}}/>
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
