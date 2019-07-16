import React from 'react';
import LairIndexItem from './lair_index_item';

class TypeLairsIndex extends React.Component {

    displayLairsByAmenity(amenity) {
      const lairs = this.props.lairs.filter(lair => lair[amenity] === true);
      return lairs.map(lair => (
        <LairIndexItem lair={lair}/>
      ))
    }

    render() {
      let lairType = this.props.lairType.charAt(0).toUpperCase() + this.props.lairType.slice(1);
        return (
            <div className="lair-index-container">
            <h1 className='lair-type-header'>{lairType} Lairs</h1>
            <div>
              <h4 className='lair-index-header'>Where to stay</h4>
              <ul className="lair-row-container">
                {this.props.lairs.map(lair => <LairIndexItem lair={lair} />)}
              </ul>
            </div>
            <div className="type-amenity-container">
              <h4 className="lair-index-header">
                Places to stay with minions
              </h4>
              <ul className="lair-row-container">
                {this.displayLairsByAmenity("minions")}
              </ul>
            </div>
            <div className="type-amenity-container">
              <h4 className="lair-index-header">
                Places to stay with a torture chamber
              </h4>
              <ul className="lair-row-container">
                {this.displayLairsByAmenity("torture_chamber")}
              </ul>
            </div>
          </div>
        );
    }
}




export default TypeLairsIndex;
