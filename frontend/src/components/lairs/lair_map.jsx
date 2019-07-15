import React from 'react';
import {withRouter} from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

class LairMap extends React.Component {
  
    componentDidMount() {
        const mapOptions = {
            center: { lat: 51.566929, lng: -0.147071 },
            zoom: 13
        };

        this.map = new window.google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);

        this.map.addListener('idle', () => {
            let bounds = this.map.getBounds();
            let northEastLat = bounds.getNorthEast().lat().toString();
            let northEastLng = bounds.getNorthEast().lng().toString();
            let southWestLat = bounds.getSouthWest().lat().toString();
            let southWestLng = bounds.getSouthWest().lng().toString();
            bounds = {
                "northEast": { "lat": northEastLat, "lng": northEastLng },
                "southWest": { "lat": southWestLat, "lng": southWestLng }
            }
            // this.props.updateBounds(bounds);
        })
    }

    componentDidUpdate() {
      this.MarkerManager.updateMarkers(this.props.lairs);
    }
  
    render(){
        return (
            <div id='map-container' ref={map => this.mapNode = map}>
            </div>
        )
    }
}

export default withRouter(LairMap);