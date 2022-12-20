import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(){
  super();

  this.state = {
    monsters:[],
  };
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((responce) => responce.json()
    .then((users) => this.setState(() => {
      return {monsters: users}
    },))
    );
}

  render(){
    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='Search Monsters' onChange={(event) => {
          const filteredMonsters = this.state.monsters.filter(() => {
            
          })
        }}/>
        {
          this.state.monsters.map((monster) => {
            return<div key = {monster.id}><h1>{monster.name}</h1></div>
          })
        }
      </div>
      );
  }
}

export default App;
