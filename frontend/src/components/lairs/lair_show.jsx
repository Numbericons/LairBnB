import React from 'react';

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

    isTorture() {
        if (this.props.lair.torture_chamber === true) {
            return <div className="single-amenity"><i className="fas fa-dungeon" /> Torture Chamber</div>
        } else {
            return null
        }
    }

    isMinion() {
        if (this.props.lair.minions === true) {
            return <div className="single-amenity"><i className="fas fa-people-carry" /> Minions</div>
        } else {
            return null
        }
    }

    isWifi() {
        if (this.props.lair.wifi === true) {
            return <div className="single-amenity"><i className="fas fa-wifi" /> Wifi</div>
        } else {
            return null
        }
    }

    isHeroDetector() {
        if (this.props.lair.hero_detector === true) {
            return <div className="single-amenity"><i className="fas fa-mask" /> Hero Detector</div>
        } else {
            return null
        }
    }

    isPool() {
        if (this.props.lair.hero_detector === true) {
            return <div className="single-amenity"><i className="fas fa-swimming-pool" /> Swimming Pool</div>
        } else {
            return null
        }
    }

    isCemetary() {
        if (this.props.lair.cemetary === true) {
            return <div className="single-amenity"><i className="fas fa-skull" /> Cemetery</div>
        } else {
            return null
        }
    }


    render() {
        let { lair, user } = this.props;
        debugger;
        if (!lair || !user) return null;
        return (
            <div>
                <img className='show-img' src={lair.image_url}/>
                <div className='lair-items-container'>
                    <div className='lair-name'>{lair.name}</div>
                    <div className='lair-location'>{lair.location}</div>
                    <div className='lair-description'>{lair.description}</div>
                    <div>${lair.rate} per night</div>
                    <div className='amenities-container'>
                        <div className='amenities-header'>Amenities</div>
                        <div className='amenities'>
                            {this.isTorture()}
                            {this.isMinion()}
                            {this.isWifi()}
                            {this.isHeroDetector()}
                            {this.isPool()}
                            {this.isCemetary()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LairShow;