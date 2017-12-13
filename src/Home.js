import React from 'react';
import Header from './Header';
import WhatWeDo from './WhatWeDo';
import Entertainment from './Entertainment';
import Travel from './Travel';
import Newsletter from './Newsletter';
import Footer from './Footer';

class Home extends React.Component {
  render(){
    return (
      <div>
        <Header />
        <WhatWeDo />
        <Entertainment />
        <Travel />
        <Newsletter />
        <Footer />
      </div>
    )
  }
}

export default Home;