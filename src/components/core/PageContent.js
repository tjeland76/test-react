import React from 'react';
import PropTypes from 'prop-types';
import qwest from 'qwest';
import { withRouter } from 'react-router';

class PageContent extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      pageContent: null
    };

  }

    componentDidMount () {

        const url = '/page';
        let self = this;
        qwest.get(url, {
          pageId: this.props.pageId
            }, {
                cache: true
            })
            .then(function(xhr, resp) {
                if(resp &&
                resp.data && resp.data.attributes && resp.data.attributes.body) {
console.log(resp.data.attributes);
                    self.setState(
                      {
                        pageContent: resp.data.attributes
                      }
                    );
                }
            });


    }

  render() {

    const loader = <div className="loader">Loading...</div>;

    // Handle case where the response is not here yet
    if ( !this.state.pageContent ) {
      // Note that you can return false it you want nothing to be put in the dom
      // This is also your chance to render a spinner or something...
      return loader;
    }

    return (
      <div>
        <div className="pageImage" style={{display: this.state.pageContent.image.url ? 'block' : 'none' }}><img src={this.state.pageContent.image.url} /></div>
      <div dangerouslySetInnerHTML={{__html: this.state.pageContent.body}}/>
      </div>
    );
  }
}

PageContent.propTypes = {
  pageId: PropTypes.string
};

export default withRouter(PageContent);
