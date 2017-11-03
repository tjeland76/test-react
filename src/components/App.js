import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './core/Footer';
import { navData } from '../services/navData';
import { mediaLinksData, affiliateLinksData } from '../services/linksData';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      
    };
    
  }
  render() {
    
    return (
       <div>
        <Header navData={navData} mediaLinksData={mediaLinksData} affiliateLinksData={affiliateLinksData}/>
        <Main />
        <Footer navData={navData} mediaLinksData={mediaLinksData}/>
        </div>
    );
      
  }
}

export default App;
