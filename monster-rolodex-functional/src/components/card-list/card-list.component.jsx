import { Component } from "react";

import Card from "../card/card.component";

import'./card-list.styles.css';

const CardList = ({monster}) => <div className='card-list'> 
    {monsters && monsters.map((monster) =>  <Card monster={monster}/>)}
</div>;

export default CardList;
