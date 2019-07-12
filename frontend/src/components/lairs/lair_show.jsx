import React from 'react';

class LairShow extends React.Component {
    componentDidMount() {
        this.props.fetchLair(this.props.match.params.lair_id);
    }

    render() {
        let { lair } = this.props;
        if (!lair) return null;
        return (
            <div>
                <img className='show-img' src={lair.image_url}/>
                <div className='lair-name'>{lair.name}</div>
                <div className='lair-location'>{lair.location}</div>
                <div className="lair-description">{lair.description}</div>
                <div>${lair.rate} per night</div>
                <div className='amenities-container'>
                    <h5 className='amenities'>
                        <i className="fas fa-dungeon" /> Torture Chamber
                        <i className="fas fa-people-carry"/> Minions
                        <i className="fas fa-wifi" /> Wifi
                        <i className="fas fa-mask" /> Hero Detector
                        <i className="fas fa-swimming-pool"/> Swimming Pool
                        <i className="fas fa-skull" /> Cemetery
                    </h5>
                </div>
            </div>
        )
    }
}

export default LairShow;