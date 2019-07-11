import React from 'react';

class LairShow extends React.Component {
    componentDidMount() {
        this.props.fetchLair(this.props.match.params.lair_id);
    }

    render() {
        return (
            <div>it's kinda workin</div>
        )
    }
}

export default LairShow;