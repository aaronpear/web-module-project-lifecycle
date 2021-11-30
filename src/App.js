import React from 'react';
import User from './components/User';
import FollowerList from './components/FollowerList';
import axios from 'axios';
import styles from './styles.css';

class App extends React.Component {
  state = {
    input: '',
    userData: [],
    followers: []
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/aaronpear')
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

  render() {
    return(<div className='body-container'>
      <h1>Github Card</h1>
      <form>
        <input type='text' />
        <button>Search</button>
      </form>
      <User userData={this.state.userData} />
      <FollowerList followers={this.state.followers} />
    </div>);
  }
}

export default App;
