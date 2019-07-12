import React from 'react';
import { Link } from 'react-router-dom';

class LairShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchLair(this.props.lairId)
            .then(action => {
                this.props.fetchUser(action.lair.owner_id)
            })
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


    render() {
        let { lair, user } = this.props;
        if (!lair || !user) return null;
        return (
          <div>
            <div className="show-img-container">
                <img className="show-img"  src={lair.image_url} />
            </div>
            <div className="lair-items-container">
              <div className="lair-user-container">
                <div className="lair-name-location">
                  <div className="lair-name">{lair.name}</div>
                  <div className="lair-location">{lair.location}</div>
                </div>
                <div className="user-image-name-container">
                    <Link to={`/users/show/${user.id}`}>
                        <img className='user-pic' src={user.image_url}/>
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
                  <p className="about-lair-description">Supervillains are experienced, highly infamous villains who are committed to providing horrendous experiences for guests.</p>
                  <div className="about-lair-title">
                    <i className="fas fa-ghost"></i>
                    <p className="about-lair-title-text">Eerie presence</p>
                  </div>
                  <p className="about-lair-description">13 recent guests said this place had an eerie presence to it.</p>
                  <div className="about-lair-title">
                    <i className="fas fa-map-marker-alt"></i>
                    <p className="about-lair-title-text">Great location</p>
                  </div>
                  <p className="about-lair-description">100% of recent guests gave the location a 5-star rating.</p>
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
            </div>
          </div>
        );
    }
}

export default LairShow;