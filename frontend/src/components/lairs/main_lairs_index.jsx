import React from 'react'
import MainLairTypeIndexItem from './main_lair_type_index_item';
import mean from 'lodash.mean'

class MainLairIndex extends React.Component {
    componentDidMount(){
        this.props.fetchLairs();
    }

    render(){
        if (Object.keys(this.props.lairs).length === 0){
            return <div className="lair-index-container"></div>
        }

        //Get each type of lair in an array
        let types = [];
        
        Object.keys(this.props.lairs).forEach(lairId => {
            let lairType = this.props.lairs[lairId].type
            if (!types.includes(lairType)){
                types.push(lairType)
            }
        })

        //Get average prices for each lair type
        let lairTypePrices = {};
        Object.keys(this.props.lairs).forEach(lairId => {
            let lair = this.props.lairs[lairId];
            if (!lairTypePrices[lair.type]){
                lairTypePrices[lair.type] = [];
            }
            lairTypePrices[lair.type].push(lair.rate)
        })

        let lairTypePriceAverage = {};
        
        Object.keys(lairTypePrices).forEach(type => {
            lairTypePriceAverage[type] = Math.floor(mean(lairTypePrices[type]))
        })

        // Create a tile for each type of lair
        let lairTypeItems = {};
        types.forEach(type => {
            Object.keys(this.props.lairs).forEach(lairId => {
                let lair = this.props.lairs[lairId];
                if (lair.type === type && !lairTypeItems[type]){
                    let typeStr = type.charAt(0).toUpperCase() + type.slice(1)
                    lairTypeItems[type] = ( <MainLairTypeIndexItem
                        key={lairId}
                        image={lair.image_url}
                        type={typeStr}
                        avgNightlyRate={lairTypePriceAverage[type]}
                        />
                    )
                }
            })
        })

        return (
            <div className="lair-index-container">
                <h2 className="lair-index-type-header">Recommended for you</h2>
                <ul className='lair-row-container'>
                    {Object.values(lairTypeItems)}
                </ul>
            </div>
        )
    }
}

export default MainLairIndex;