import React from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import { selectReviewsByLairId } from '../../selectors/selector';

const mapStateToProps = (state, ownProps) => {
    return ({
        reviews: selectReviewsByLairId(state, ownProps.lair._id)
    })
};

class LairIndexItem extends React.Component {

    getStars(rating) {
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
                <span>{this.props.reviews.length}</span>
            </div>
        )
    }

    calcAvgRating() {
        const reviews = this.props.reviews;
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

    render(){
        let lairTileStyle = {
            backgroundImage: `url(${this.props.lair.image_url})`
        }

        return (
            <li className="lair-random-tile">
                <Link to={`/lair/${this.props.lair._id}`}>
                    <div className="lair-random-tile-image" style={lairTileStyle}></div>
                    <div className="lair-random-tile-description">
                        {this.props.lair.type} <span> · </span> {this.props.lair.country}
                    </div>
                    <div className="lair-random-tile-title">
                        {this.props.lair.name}
                    </div>
                    <div className="lair-random-tile-price">
                        ${this.props.lair.rate}/night
                    </div>
                    {this.getStars(this.calcAvgRating())}
                </Link>
            </li>
        )
    }
}

export default connect(mapStateToProps, undefined)(LairIndexItem);