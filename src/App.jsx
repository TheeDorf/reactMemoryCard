import React, { Component } from "react"

class MemoryGame extends Component{
  constructor(props){
    super(props);
    this.state= {
      score: 0,
      bestScore: 0,
      cards:[
        {id: 1, text: "Card 1" },
        {id: 2,text: "Card 2"},
        {id: 3,text: "Card 3"},
        {id: 4,text: "Card 4"}
      ],
      clickedCards: [],
    };
    this.shuffleCards = this.shuffleCards.bind(this);
  }
}



export default MemoryGame