import React from 'react'
import MainLairIndexItem from './main_lair_index_item';

class MainLairIndex extends React.Component {
    componentDidMount(){
        this.props.fetchLairs();
    }

    render(){
        if (Object.keys(this.props.lairs).length === 0){
            return <div className="lair-index-container"></div>
        }
        let manorLairItems = Object.keys(this.props.lairs).map(lairId => {
            let lair = this.props.lairs[lairId];
            if (lair.type === "manor"){
                return <MainLairIndexItem
                    key={lairId}
                    lair={lair}
                />
            }
        })

        let towerLairItems = Object.keys(this.props.lairs).map(lairId => {
            let lair = this.props.lairs[lairId];
            if (lair.type === "tower") {
                return <MainLairIndexItem
                    key={lairId}
                    lair={lair}
                />
            }
        })

        let caveLairItems = Object.keys(this.props.lairs).map(lairId => {
            let lair = this.props.lairs[lairId];
            if (lair.type === "cave") {
                return <MainLairIndexItem
                    key={lairId}
                    lair={lair}
                />
            }
        })


        return (
            <div className="lair-index-container">
                <h2 className="lair-index-type-header">Head to a manor</h2>
                <ul className='lair-row-container'>
                    {manorLairItems}
                </ul>

                <h2 className="lair-index-type-header">Spend some time in a tower</h2>
                <ul className='lair-row-container'>
                    {towerLairItems}
                </ul>

                <h2 className="lair-index-type-header">Get cozy in a cave</h2>
                <ul className='lair-row-container'>
                    {caveLairItems}
                </ul>
            </div>
        )
    }
}

export default MainLairIndex;