import React from 'react'

class MainLairIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchLairs();
    }

    render(){
        if (Object.keys(this.props.lairs).length === 0){
            return <></>
        }

        return (
            <div>
                
            </div>
        )
    }
}

export default MainLairIndex;