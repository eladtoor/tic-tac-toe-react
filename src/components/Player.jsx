import { useState } from "react"

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);
    function handleClick() {
        setIsEditing((editing) => !isEditing)
    }
    function handleChange(event) {
        setPlayerName(event.target.value)
    }
    return <li>
        <span className="player">
            {isEditing ? <input type="text" required defaultValue={playerName} onChange={handleChange} /> : <span className="player-name">{playerName}</span>}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
}