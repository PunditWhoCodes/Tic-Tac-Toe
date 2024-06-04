import { useState } from "react";

const Player = ({initialName, symbol, isActive, onChangeName}) => {
    
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

    function clickHandler () {
        setIsEditing((editing) => !editing);
        
        if(isEditing) {
            onChangeName(symbol, playerName)
        }
    }

    function changeHandler (event) {
        setPlayerName(event.target.value);
    }
    let editablePlayerName = <span className="player-name">{playerName}</span>;

    if(isEditing) {
        editablePlayerName = <input type="text" required  value={playerName} onChange={changeHandler}/>
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick = {clickHandler} >{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}
export default Player;