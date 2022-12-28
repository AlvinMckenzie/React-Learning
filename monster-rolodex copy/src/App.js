import React from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';
import { useEffect, useState, useCallback } from 'react'; 

const App = () => { 
  const [monsters, setMonsters ] = useState([])

  const [filteredMonsters, setFilteredmonsters] = useState([])

  const [searchField, setSearchField] = useState('')

  const fetchUser = useCallback(async ()=> {
    try {
     const resp = await fetch('https://jsonplaceholder.typicode.com/users')
     
    const respJson = await resp.json()
    console.log(respJson)
    setMonsters (respJson)
    } catch (error) {
      console.error(error)
    }

  },[setMonsters, monsters])
 
  useEffect(()=>{
    
    if( monsters.length === 0) {
      fetchUser()
    }
    if(monsters){ 
      const filtered = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField)})
            setFilteredmonsters(filtered)
    }
  },[monsters, fetchUser, searchField, setFilteredmonsters])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString)
  }

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
