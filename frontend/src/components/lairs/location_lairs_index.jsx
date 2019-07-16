import React from 'react';
import LairMap from './lair_map';
import { getLairByBounds } from '../../util/lair_api_util';
import { Link } from 'react-router-dom';

class LocationLairsIndex extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        lairs: [],
        reviews: {}
      };
      this.fetchLairsUsingBounds = this.fetchLairsUsingBounds.bind(this);
    }

    fetchLairsUsingBounds(bounds) {
      getLairByBounds(JSON.stringify(bounds))
        .then(payload => {
          this.setState({lairs: payload.data.lairs, reviews: payload.data.reviews});
        })
    }

  getStars(rating, lairId) {
    const starArray = [];
    for (let i = 1, fin = Math.floor(rating); i <= fin; i++) {
      starArray.push(< i className="fas fa-star" />);
    }
    const remains = rating % 1;
    if (remains >= .75) {
      starArray.push(< i className="fas fa-star" />);
    } else if (remains > .25) {
      starArray.push(< i className="fas fa-star-half-alt" />);
    }
    while (starArray.length < 5) {
      starArray.push(< i className="far fa-star" />);
    }
    return (
      <div className="lair-random-tile-rating">
        {starArray}
        <span>{this.state.reviews[lairId] ? this.state.reviews[lairId].length:0}</span>
      </div>
    )
  }

  calcAvgRating(lairId) {
    const reviews = this.state.reviews[lairId];
    if (!reviews) {
      return 0
    }
    const ratingsObj = {};
    for (let i = 0, fin = reviews.length; i < fin; i++) {
      const review = reviews[i];
      ratingsObj.accuracy = (ratingsObj.accuracy || 0) + review.accuracy;
      ratingsObj.communication = (ratingsObj.communication || 0) + review.communication;
      ratingsObj.cleanliness = (ratingsObj.cleanliness || 0) + review.cleanliness;
      ratingsObj.location = (ratingsObj.location || 0) + review.location;
      ratingsObj.check_in = (ratingsObj.check_in || 0) + review.check_in;
      ratingsObj.value = (ratingsObj.value || 0) + review.value;
    }
    return (ratingsObj.accuracy + ratingsObj.communication + ratingsObj.cleanliness + ratingsObj.location + ratingsObj.check_in + ratingsObj.value) / (6 * reviews.length);
  }

    displayLairs() {
      return (
        <ul className="lairs-results-list">
          {this.state.lairs.map(lair => {
            let lairTileStyle = {
              backgroundImage: `url(${lair.image_url})`
            }
            return (
              <Link to={`/lair/${lair._id}`}>  
                <li key={`loclair${lair._id}`} className="lair-tile">
                    <div className="lair-tile-image" style={lairTileStyle}></div>
                    <div className="lair-tile-info">
                      <h2 className="lair-tile-description">Entire {lair.type} </h2>
                      <h2 className="lair-tile-title">{lair.name}</h2>
                      <p>{lair.max_guests} guests</p>
                      <div className="lair-tile-bottom-info">
                        {this.getStars(this.calcAvgRating(lair._id),lair._id)}
                        <span>${lair.rate}/night</span>
                      </div>
                    </div>
                </li>
              </Link>
            )
          })}
        </ul>
      )
    }

    render() {
      return (
        <div className='location-lairs-index-container'>
          <div>
            <h1>Explore all {this.state.lairs.length}+ LairBnB places to stay in {this.props.lairLocation}</h1>
            {this.displayLairs()}
          </div>
          <LairMap 
            lairs={this.state.lairs} 
            lat={this.props.lat} 
            lng={this.props.lng}
            fetchLairsUsingBounds={this.fetchLairsUsingBounds}
          />
          
        </div>
      )
    }
      
}

export default LocationLairsIndex;