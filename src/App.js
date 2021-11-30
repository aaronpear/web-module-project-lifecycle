import React from 'react';
import User from './components/User';
import FollowerList from './components/FollowerList';
import axios from 'axios';
import styles from './styles.css';


class App extends React.Component {
  state = {
    currentUser: 'aaronpear',
    input: '',
    userData: [],
    followers: []
  }

  getUserData = (user) => {
    axios.get(`https://api.github.com/users/${user}`)
    .then(response => {
      this.setState({
        ...this.state,
        userData: response.data
      })
    })
    .catch(error => {
      console.error(error)
    });
  }
  
  getUserFollowers = (user) => {
    axios.get(`https://api.github.com/users/${user}/followers`)
    .then(response => {
      this.setState({
        ...this.state,
        followers: response.data
      })
    })
    .catch(error => {
      console.error(error)
    });
  }
  

  componentDidMount() {
    axios.get(`https://api.github.com/users/aaronpear`)
    .then(response => {
      this.setState({
        ...this.state,
        userData: response.data
      })
    })
    .catch(error => {
      console.error(error)
    });

    axios.get('https://api.github.com/users/aaronpear/followers')
    .then(response => {
      this.setState({
        ...this.state,
        followers: response.data
      })
    })
    .catch(error => {
      console.error(error)
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentUser !== prevState.currentUser) {
      this.getUserData(this.state.currentUser);
      this.getUserFollowers(this.state.currentUser);
    }
}


  handleClick = (event) => {
    event.preventDefault();
    this.setState({
      ...this.state,
      currentUser: this.state.input
    })
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      input: event.target.value
    })
  }

  render() {
    return(<div className='body-container'>
      <h1>Github Card</h1>
      <form>
        <input type='text' onChange={this.handleChange} />
        <button onClick={this.handleClick}>Search</button>
      </form>
      <User userData={this.state.userData} />
      <FollowerList followers={this.state.followers} />
    </div>);
  }
}

export default App;
