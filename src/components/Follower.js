import React from "react";

class Follower extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { follower } = this.props;
        
        return (
            <div>
                <img src={follower.avatar_url} alt='follower pic here' />
                <p>{follower.login}</p>
            </div>
        )
    }
}

export default Follower;