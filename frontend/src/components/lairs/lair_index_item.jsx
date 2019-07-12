import React from 'react'
import {Link} from 'react-router-dom'

class LairIndexItem extends React.Component {
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
                    <div className="lair-random-tile-rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <span>50</span>
                    </div>
                </Link>
            </li>
        )
    }
}

export default LairIndexItem;