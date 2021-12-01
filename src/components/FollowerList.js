import React from "react";
import Follower from './Follower';
import styles from '../styles.css';

class FollowerList extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { followers } = this.props;

        return  (
            <div>
                <h1>Followers:</h1>
                <div className='follower-container'>
                    {followers.map((follower, index) => {
                        return <Follower key={index} follower={follower} />
                    })}
                </div>
            </div>
        )
    }
}

export default FollowerList;