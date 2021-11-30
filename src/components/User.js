import React from 'react';
import styles from '../styles.css';

class User extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { userData } = this.props;
        return (
            <div className='user-container'>
                <div className='user-pic'>
                    <img src={userData.avatar_url} alt='user pic here' />
                </div>
                <div className='user-data'>
                    <h2>{userData.name}</h2>
                    <h3>{userData.login}</h3>
                    <p>Total Repos: {userData.public_repos}</p>
                    <p>Total Followers: {userData.followers}</p>
                </div>
            </div>
        )
    }
}

export default User;