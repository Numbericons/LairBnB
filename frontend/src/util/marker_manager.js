export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    // For each lair, if the id is not a key in this.markers, 
    // create a new marker from it and add it to the map and this.markers
    updateMarkers(lairs) {
        let lairsObj = {};
        lairs.forEach(lair => lairsObj[lair._id] = lair);

        //remove lairs
        let lairsToRemove = Object.keys(this.markers).filter(key => !lairsObj[key])
        lairsToRemove.forEach(lairId => {
            this.removeMarker(this.markers[lairId])
        })

        //add lairs

        lairs.forEach(lair => {
            if (!this.markers[lair._id]) {
                this.createMarkerFromLair(lair);
            }
        })
        
    }

    removeMarker(marker) {
        marker.setMap(null);
        delete this.markers[marker.id]
    }

    //add a marker to the map and to this.markers
    createMarkerFromLair(lair) {
        
        //adding the marker to the map
        var position = new window.google.maps.LatLng(lair.lat, lair.lng);
        var marker = new window.google.maps.Marker({
            id: lair._id,
            position: position,
            map: this.map
        });

        //adding the marker to this.markers
        this.markers[lair._id] = marker
    }
}