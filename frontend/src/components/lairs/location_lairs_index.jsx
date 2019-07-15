import React from 'react';
import LairIndexItem from './lair_index_item';
import LairMap from './lair_map';

class LocationLairsIndex extends React.Component {
    render() {
      return (
        <div className='location-lairs-index-container'>
          {/* index */}
          <LairMap lairs={this.props.lairs}/>
          
        </div>
      )
    }
      
}

export default LocationLairsIndex;