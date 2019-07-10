import React from 'react'

class MainLairIndexItem extends React.Component {
    render(){
        let lairTileStyle = {
            backgroundImage: `url(${this.props.lair.image_url})`
        }

        return (
            <li className='lair-tile' style={lairTileStyle}>
                <div className="lair-info">
                    <p className='lair-name'>{this.props.lair.name}</p>
                    <p className='lair-rate'>${this.props.lair.rate}/night</p>
                </div>
            </li>
        )
    }
}

export default MainLairIndexItem;