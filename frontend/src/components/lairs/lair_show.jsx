import React from 'react';
import { Link } from 'react-router-dom';
import ReserveForm from '../bookings/reserve_form';

class LairShow extends React.Component {

    componentDidMount() {
        this.props.fetchLair(this.props.lairId)
            .then(action => {
                this.props.fetchUser(action.lair.owner_id);
            })
        this.props.fetchReviewsByLairId(this.props.lairId);
    }

    amenityArr() {
        const amenArr = [];

        let torture = this.isTorture();
        let minion = this.isMinion();
        let wifi = this.isWifi();
        let hero_detector = this.isHeroDetector();
        let pool = this.isPool();
        let cemetery = this.isCemetery();

        if (this.props.lair.torture_chamber) {
          amenArr.unshift(torture);
        } else {
          amenArr.push(torture);
        }

        if (this.props.lair.minions) {
            amenArr.unshift(minion);
        } else {
            amenArr.push(minion);
        }

        if (this.props.lair.wifi) {
            amenArr.unshift(wifi);
        } else {
            amenArr.push(wifi);
        }

        if (this.props.lair.hero_detector) {
            amenArr.unshift(hero_detector);
        } else {
            amenArr.push(hero_detector);
        }

        if (this.props.lair.pool) {
            amenArr.unshift(pool);
        } else {
            amenArr.push(pool);
        }

        if (this.props.lair.cemetery) {
            amenArr.unshift(cemetery);
        } else {
            amenArr.push(cemetery);
        }
        
        return amenArr;
    }
    isTorture() {
        if (this.props.lair.torture_chamber === true) {
            return <div className="single-amenity"><i className="fas fa-dungeon" /><h5 className='single-amenity-text'> Torture Chamber</h5></div>
        } else {
            return <div className="single-amenity"><i className="fas fa-dungeon" /> <h5 className='single-amenity-crossed-text'> Torture Chamber</h5></div>
        }
    }

    isMinion() {
        if (this.props.lair.minions === true) {
            return <div className="single-amenity"><i className="fas fa-people-carry" /> <h5 className='single-amenity-text'> Minions</h5></div>
        } else {
            return <div className="single-amenity"><i className="fas fa-people-carry" /> <h5 className='single-amenity-crossed-text'> Minions</h5></div>
        }
    }

    isWifi() {
        if (this.props.lair.wifi === true) {
            return <div className="single-amenity"><i className="fas fa-wifi" /><h5 className='single-amenity-text'> Wifi</h5></div>
        } else {
            return <div className="single-amenity"><i className="fas fa-wifi" /><h5 className='single-amenity-crossed-text'> Wifi</h5></div>
        }
    }

    isHeroDetector() {
        if (this.props.lair.hero_detector === true) {
            return <div className="single-amenity"><i className="fas fa-mask" /><h5 className='single-amenity-text'> Hero Detector</h5></div>
        } else {
            return <div className="single-amenity"><i className="fas fa-mask" /><h5 className='single-amenity-crossed-text'> Hero Detector</h5></div>
        }
    }

    isPool() {
        if (this.props.lair.hero_detector === true) {
            return <div className="single-amenity"><i className="fas fa-swimming-pool" /><h5 className='single-amenity-text'> Swimming Pool</h5></div>
        } else {
            return <div className="single-amenity"><i className="fas fa-swimming-pool" /><h5 className='single-amenity-crossed-text'> Swimming Pool</h5></div>
        }
    }

    isCemetery() {
        if (this.props.lair.cemetery === true) {
            return <div className="single-amenity"><i className="fas fa-skull" /><h5 className='single-amenity-text'> Cemetery</h5></div>
        } else {
            return <div className="single-amenity"><i className="fas fa-skull" /><h5 className='single-amenity-crossed-text'> Cemetery</h5></div>
        }
    }

    getStars(rating) {
        const starArray = [];
        for (let i=1, fin=Math.floor(rating); i <= fin; i++) {
            starArray.push(< i className = "fas fa-star" />);
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
            <div>
                {starArray}
            </div>
        )
    }

    calcRatings() {
        const reviews = this.props.reviews;
        const ratingsObj = {};
        let fiveStarLocRatings = 0;
        for (let i=0, fin=reviews.length; i<fin; i++) {
            const review = reviews[i];
            ratingsObj.accuracy = (ratingsObj.accuracy || 0) + review.accuracy;
            ratingsObj.communication = (ratingsObj.communication || 0) + review.communication;
            ratingsObj.cleanliness = (ratingsObj.cleanliness || 0) + review.cleanliness;
            ratingsObj.location = (ratingsObj.location || 0) + review.location;
            ratingsObj.check_in = (ratingsObj.check_in || 0) + review.check_in;
            ratingsObj.value = (ratingsObj.value || 0) + review.value;
            if (review.location === 5) {
                fiveStarLocRatings = fiveStarLocRatings + 1;
            }
        }
        ratingsObj.avgRating = (ratingsObj.accuracy + ratingsObj.communication + ratingsObj.cleanliness + ratingsObj.location + ratingsObj.check_in + ratingsObj.value) / (6 * reviews.length);
        ratingsObj.fiveStarPercent = (fiveStarLocRatings / reviews.length) * 100;
        this.ratingsObj = ratingsObj;
    }

    
    displayReviews() {
        const reviews = this.props.reviews;
        const users = this.props.users;
        return (
            <section className="reviews-container">
                <div className="review-header">
                    <div className="review-header-count">
                        {this.props.reviews.length}&nbsp;
                        {reviews.length === 1 ? "Review" : "Reviews"}&nbsp;
                    </div>
                    <div className="review-header-avg">
                        {this.getStars(this.ratingsObj.avgRating)}
                    </div>
                </div>
                <div className="review-user-container">
                    <div className="review-star-details-col">
                        <div className="review-star-details-row">
                            <span>Accuracy</span>
                            <div className="stars">{this.getStars(this.ratingsObj.accuracy / reviews.length)}</div>
                        </div>
                        <div className="review-star-details-row">
                            <span>Communication</span>
                            <div className="stars">{this.getStars(this.ratingsObj.communication / reviews.length)}</div>
                        </div>
                        <div className="review-star-details-row">
                            <span>Cleanliness</span>
                            <div className="stars">{this.getStars(this.ratingsObj.cleanliness / reviews.length)}</div>
                        </div>
                    </div>
                    <div className="review-star-details-col">
                        <div className="review-star-details-row">
                            <span>Location</span>
                            <div className="stars">{this.getStars(this.ratingsObj.location / reviews.length)}</div>
                        </div>
                        <div className="review-star-details-row">
                            <span>Check-in</span>
                            <div className="stars">{this.getStars(this.ratingsObj.check_in / reviews.length)}</div>
                        </div>
                        <div className="review-star-details-row">
                            <span>Value</span>
                            <div className="stars">{this.getStars(this.ratingsObj.value / reviews.length)}</div>
                        </div>
                    </div>
                </div>
                <ul className="review-user-reviews">
                    {reviews.map(review => {
                        const user = users[review.guest_id] || {};
                        return (                        
                            <li key={`lairshowreview-${review._id}`}>
                                <div className="review-user-reviews-user-info">
                                    <Link to={`/users/show/${user._id}`}>
                                        <img className="user-pic" src={user.image_url} alt="profile"/>
                                    </Link>
                                    <span>{user.username}</span>
                                </div>
                                <p>
                                    {review.body}
                                </p>
                            </li>
                        )
                    })}
                </ul>
            </section>
        )
    }


    render() {
        const lair = this.props.lair;
        const user = this.props.users[lair && lair.owner_id];
        if (!lair || !user) return null;
        this.calcRatings();
        return (
          <div>
            <div className="show-img-container">
                <img className="show-img"  src={lair.image_url} alt="lair"/>
            </div>
            <div className='lair-detail-container'>
                <div className="lair-items-container">
                    <div className="lair-user-container">
                        <div className="lair-name-location">
                            <div className="lair-name">{lair.name}</div>
                            <div className="lair-location">{lair.location}</div>
                        </div>
                        <div className="user-image-name-container">
                            <Link to={`/users/show/${user.id}`}>
                                <img className='user-pic' src={user.image_url} alt="profile"/>
                            </Link>
                            <div className='user-username'>{user.username}</div>
                        </div>
                    </div>
                    <div className="about-lair-container">
                        <div className="about-lair-title">
                            <i className="fas fa-home"></i>
                            <p className="about-lair-title-text">Entire Lair</p>
                        </div>
                        <p className="about-lair-description">{lair.max_guests} guests</p>
                        <div className="about-lair-title">
                            <i className="fas fa-medal"></i>
                            <p className="about-lair-title-text">{user.username} is a Supervillain</p>
                        </div>
                        <p className="about-lair-description">
                            Supervillains are experienced, highly infamous villains who are committed to providing horrendous experiences for guests.
                        </p>
                        <div className="about-lair-title">
                            <i className="fas fa-ghost"></i>
                            <p className="about-lair-title-text">Eerie presence</p>
                        </div>
                        <p className="about-lair-description">
                            13 recent guests said this place had an eerie presence to it.
                        </p>
                        <div className="about-lair-title">
                            <i className="fas fa-map-marker-alt"></i>
                            <p className="about-lair-title-text">Great location</p>
                        </div>
                        <p className="about-lair-description">
                            {this.ratingsObj.fiveStarPercent || 0}% of recent guests gave the location a 5-star rating.
                        </p>
                    </div>
                    <div className="user-profile-left-line">
                        <div className="line"></div>
                    </div>
                    <div className="lair-description">{lair.description}</div>
                    <div className="user-profile-left-line">
                        <div className="line"></div>
                    </div>
                    <div className="amenities-container">
                        <div className="amenities-header">Amenities</div>
                        <div className="amenities">
                            {this.amenityArr()}
                        </div>
                    </div>
                    {this.displayReviews()}
                </div>
                <ReserveForm
                    key={`reserve-form${lair.id}`}
                    lair={lair}
                    reviews={this.props.reviews}
                    avgRating={this.ratingsObj.avgRating}
                />
            </div>
        </div>
        );
    }
}

export default LairShow;