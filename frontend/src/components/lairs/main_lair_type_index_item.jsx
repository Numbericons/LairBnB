import React from 'react'

class MainLairTypeIndexItem extends React.Component {
    render(){
        let lairTileStyle = {
            backgroundImage: `url(${this.props.image})`
        }

        return (
            <li className='lair-type-tile' style={lairTileStyle}>
                <div className="lair-info">
                    <p className='lair-type'>{this.props.type}</p>
                    <p className='lair-rate'>${this.props.avgNightlyRate}/nightly average</p>
                </div>
            </li>
        )
    }
}

export default MainLairTypeIndexItem;