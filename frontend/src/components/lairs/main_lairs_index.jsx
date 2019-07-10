import React from 'react'

class MainLairIndex extends React.Component {
    componentDidMount(){
        this.props.fetchLairs();
    }

    render(){
        if (Object.keys(this.props.lairs).length === 0){
            return <div className="lair-index-container"></div>
        }
        let lairNames = Object.keys(this.props.lairs).map(lairId => {
            let lair = this.props.lairs[lairId];
            return <p>{lair.name}</p>
        })
        return (
            <div>
                {lairNames}
            </div>
        )
    }
}

export default MainLairIndex;