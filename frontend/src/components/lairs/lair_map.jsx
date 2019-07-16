import React from 'react';
import {withRouter} from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

class LairMap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lat: props.lat,
            lng: props.lng
        };
    }
  
    componentDidMount() {
        const mapOptions = {
            center: { lat: this.props.lat, lng: this.props.lng },
            zoom: 7
        };

        this.map = new window.google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.map.addListener('idle', () => {
            this.updateBounds();             
        })
    }

    updateBounds() {
        let bounds = this.map.getBounds();
        let northEastLat = bounds.getNorthEast().lat().toString();
        let northEastLng = bounds.getNorthEast().lng().toString();
        let southWestLat = bounds.getSouthWest().lat().toString();
        let southWestLng = bounds.getSouthWest().lng().toString();
        bounds = {
            "northEast": { "lat": northEastLat, "lng": northEastLng },
            "southWest": { "lat": southWestLat, "lng": southWestLng }
        }
        this.props.fetchLairsUsingBounds(bounds);
    }

    componentDidUpdate() {
        if (this.props.lat !== this.state.lat && this.props.lng !== this.state.lng) {
            let latLng = new window.google.maps.LatLng({lat: this.props.lat, lng: this.props.lng});
            this.map.setCenter(latLng);
            this.updateBounds();
            this.setState({ lat: this.props.lat, lng: this.props.lng })
        }
        if (this.props.lairs) {
            this.MarkerManager.updateMarkers(this.props.lairs);
        }
    }
  
    render(){
        return (
            <div id='map-container' ref={map => this.mapNode = map}>
            </div>
        )
    }
}

export default withRouter(LairMap);