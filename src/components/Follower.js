import React from "react";
import styles from '../styles.css';

class Follower extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { follower } = this.props;

        return (
            <div className='follower'>
                <>
                <img className='image' src={follower.avatar_url} alt='follower pic here' />
                <p>{follower.login}</p>
                </>
            </div>
        )
    }
}

export default Follower;