import React from "react";
import Follower from './Follower';

class FollowerList extends React.Component {
    render() {
        return  (
            <div>
                <h1>Followers:</h1>
                <Follower />
                <Follower />
                <Follower />
            </div>
        )
    }
}

export default FollowerList;