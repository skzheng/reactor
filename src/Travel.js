import React from 'react';

class Travel extends React.Component {
  constructor(props){
    super(props),
    this.state = {}
  }

  render() {
    return(
      <div id="travel">
        <h3 style={{margin: '50px'}}>Maui By Air The Best Way Around The Island</h3>
        <div id="locations">
          <div>
            <img className="thumbnail" src="/assets/3.png"/>
            <div className="locationInfo">
              <h5>East Josianefurt</h5>
              <caption>085 Daron Via</caption>
            </div>
          </div>
          <div>
            <img className="thumbnail" src="/assets/4.png"/>
            <div className="locationInfo">
              <h5>South Cristopherport</h5>
              <caption>162 Chandler Ville</caption>
            </div>
          </div>
          <div>
            <img className="thumbnail" src="/assets/5.png"/>
            <div className="locationInfo">
              <h5>Concepcionbury</h5>
              <caption>7643 Kylie Burgs</caption>
            </div>
          </div>
          <div>
            <img className="thumbnail" src="/assets/6.png"/>
            <div className="locationInfo">
              <h5>Reychester</h5>
              <caption>5590 Gabe View Apt. 044</caption>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Travel;
