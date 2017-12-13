import React from 'react';

class WhatWeDo extends React.Component {
  constructor(props){
    super(props),
    this.state = {}
  }

  render() {
    return(
      <div id="whatwedo">
        <div>
          <h2>WHAT WE DO</h2>
        </div>
        <div id="wedo">
          <h5>We do</h5>
          <p>
            The quick, brown fox jumps over a lazy dog.
            <br/>
            DJs flock by when MTV ax quiz prog.
            <br/>
            Junk MTV quiz graced by fox whelps.
            <br/>
            Bwads jog, flick quartz, vex nymphs.
          </p>
        </div>
      </div>
    )
  }
}

export default WhatWeDo;
