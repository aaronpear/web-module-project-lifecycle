import React from 'react';
import User from './components/User';
import FollowerList from './components/FollowerList';
import styles from './styles.css';

class App extends React.Component {
  render() {
    return(<div className='body-container'>
      <h1>Github Card</h1>
      <form>
        <input type='text' />
        <button>Search</button>
      </form>
      <User />
      <FollowerList />
    </div>);
  }
}

export default App;
