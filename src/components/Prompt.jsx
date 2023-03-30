import React, { Component } from "react";

class Prompt extends Component{
    render(){
        const { item }= this.props;
        return(
            <div>
                <p>Have you seen this letter?</p>
                <div className="d-flex justify-content-around align-items-center">
            <button>Yes</button><div>No</div>
            </div>
            </div>
        )
    }
}

export default Prompt