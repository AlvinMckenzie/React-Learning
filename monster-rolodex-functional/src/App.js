import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';
import { useEffect, useState, useCallback } from 'react'; 

const App = () => { 
  const [monsters, setMonsters ] = useState([])

  const [search, setSearch] = useState(' ')

  const fetchUser = useCallback(async ()=> {
    try {
     const resp = await fetch('https://jsonplaceholder.typicode.com/users')
     const respJson = await resp.json()
     setMonsters(respJson)
    } catch (error) {
      console.error(error)
    }

  },[setMonsters])
 
  useEffect(()=>{
    fetchUser()
  },[fetchUser])

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    setSearch(searchField)
    console.log(event)
  }

  const filteredMonsters = monsters.filter((monster) => {
          return monster.name.toLocaleLowerCase().includes(searchField)
  });

  return <div className="App">
    <h1 className='app-title'>Monsters Rolodex</h1>
    <SearchBox 
    className = 'monsters-search-box'
    onChangeHandler = {onSearchChange} 
    placeholder = 'search monsters' />
    <CardList 
    monsters = {filteredMonsters}/>
  </div>

}

export default App;
