import React from 'react';

class Entertainment extends React.Component {
  render() {
    return(
      <div id="entertainment">
        <div className="entertainmentItem">
          <img className="thumbnail" src="/assets/1.png"/>
          <div className="entertainmentDescription">
            <h5>Regional Cuisine Down Home Southern Cooking</h5>
            <p>
              The quick, brown fox jumps over a lazy dog.
              DJs flock by when MTV ax quiz prog.
              Junk MTV quiz graced by fox whelps.
              Bwads jog, flick quartz, vex nymphs.
            </p>
          </div>
        </div>
        <div className="entertainmentItem">
          <img className="thumbnail" src="/assets/2.png"/>
          <div className="entertainmentDescription">
            <h5>Pos Hardware More Options In Less Space</h5>
            <p>
              The quick, brown fox jumps over a lazy dog.
              DJs flock by when MTV ax quiz prog.
              Junk MTV quiz graced by fox whelps.
              Bwads jog, flick quartz, vex nymphs.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Entertainment;
