import React, { Component } from "react"

const items = [];

for (let i =o; i<10; i++){
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
            items:[
                {}
            ]
        }
        randomItem(){
            let rand = Math.floor(Math.random() * items={.length});
            return rand;
          
        }
    }
    render(){
        return(
            <main className="d-flex justify-content-around align-items-center">
                <p>Item</p>
                <p>Prompt</p>
            </main>
        )
    }
}


export default Game