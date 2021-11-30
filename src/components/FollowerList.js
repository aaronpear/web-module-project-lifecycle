import React from "react";
import Follower from './Follower';
import styles from '../styles.css';

class FollowerList extends React.Component {
    render() {
        return  (
            <div>
                <h1>Followers:</h1>
                <div className='follower-container'>
                    <Follower />
                    <Follower />
                    <Follower />
                </div>
            </div>
        )
    }
}

export default FollowerList;