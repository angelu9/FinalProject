import React from "react";
import cardArray from "../../cards.json"
import Button from "../Button"
import "./style.css";


class Game extends React.Component {
    state = {
         cardArray, 
         card: cardArray[0]
         
    }

    


render() {

  return (
    <div className="card">
      
      <div className="content">

      <p>{this.state.card.description}</p>
      <Button />
      </div>

      
    </div>
  );



}

}



export default Game;