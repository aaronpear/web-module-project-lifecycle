import React from 'react';
import styles from '../styles.css';

class User extends React.Component {
    render() {
        return (
            <div className='user-container'>
                <div className='user-pic'>
                    <img src='' alt='user pic here' />
                </div>
                <div className='user-data'>
                    <h2>Username</h2>
                    <h3>Account Name</h3>
                    <p>Total Repos: ___</p>
                    <p>Total Followers: ___</p>
                </div>
            </div>
        )
    }
}

export default User;