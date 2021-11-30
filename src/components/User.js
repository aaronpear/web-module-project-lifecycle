import React from 'react';

class User extends React.Component {
    render() {
        return (
            <div>
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