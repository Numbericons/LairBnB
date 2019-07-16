import React from 'react';
import MainLairTypeIndexItem from './main_lair_type_index_item';
import LairIndexItem from './lair_index_item';
import { Link } from 'react-router-dom';
import mean from 'lodash.mean';
import samplesize from 'lodash.samplesize';
import {shuffle} from 'lodash';

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
            let randomCategories = shuffle(Object.keys(this.props.lairs));
            randomCategories.forEach(lairId => {
                let lair = this.props.lairs[lairId];
                if (lair.type === type && !lairTypeItems[type]){
                    let typeStr = type.charAt(0).toUpperCase() + type.slice(1)
                    lairTypeItems[type] = ( 
                        <Link to={`/s/${lair.type}/all`}>
                            <MainLairTypeIndexItem
                                key={`lair-type-${lairId}`}
                                image={lair.image_url}
                                type={typeStr}
                                avgNightlyRate={lairTypePriceAverage[type]}
                            />
                        </Link>
                    )
                }
            })
        })

        let randomLairs = samplesize(Object.keys(this.props.lairs), 5);
        let randomLairItems = randomLairs.map(lairId => {
            let lair = this.props.lairs[lairId];
            return (<LairIndexItem 
                        key={`lair-random${lairId}`} 
                        lair={lair}   
                    />)
        })
        return (
            <div className="lair-index-container">
                <h2 className="lair-index-header">Recommended for you</h2>
                <ul className='lair-row-container'>
                    {Object.values(lairTypeItems)}
                </ul>

                <h2 className="lair-index-header">Lairs to stay around the world</h2>
                <ul className='lair-row-container'>
                    {randomLairItems}
                </ul>

                <h2 className="lair-index-header">Lairbnb Evil Luxury Plus</h2>
                <h3 className="lair-index-sub-header">A selection of places to stay verified for modern luxury and design</h3>
                <div className="lair-index-plus-image">
                    <h4 className="lair-index-plus-text">Evil Luxury</h4>
                    <Link to={`/s/Luxury/all`}>
                        <button>EXPLORE LUXURY ></button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default MainLairIndex;