import React, { Component } from "react"

const items = [];

for (let i =0; i<10; i++){
    items.push({
        id:i,
        content: String.fromCharCode(i),
        displayed:false,

    });
}
class Game extends Component{
    constructor(props){
        super(props)

        this.state = {
            items,
        };
    }
        randomItemIndex(){
            let rand = Math.floor(Math.random() * items.length);
            return rand;
          
        }
    
    render(){
        const {items} = this.state;
        const item = items[this.randomItemIndex()].content
        return(
            <main className="d-flex justify-content-around align-items-center">
                <p>{items[this.randomItemIndex()].content}</p>
               <Prompt />
            </main>
        );
    }
}


export default Game