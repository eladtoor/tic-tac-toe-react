import { useState } from "react"

export default function Player({ name, symbol, active, onChangeName }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);
    function handleClick() {
        setIsEditing((editing) => !editing);
        if (isEditing)
            onChangeName(symbol, playerName)
    }
    function handleChange(event) {
        setPlayerName(event.target.value)
    }
    return <li className={active ? 'active' : null}>
        <span className="player">
            {isEditing ? <input type="text" required defaultValue={playerName} onChange={handleChange} /> : <span className="player-name">{playerName}</span>}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
}