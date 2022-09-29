import { useState } from 'react'
import  "../App.jsx"
import "../main.jsx"

const TextButton = (props) => {
    const [text, setText] = useState("0")
    const handleClick = () => {
        return setText(text + props.character)
    }
    return (
        <div className="App">
            <div>
            <button onClick={handleClick}>+ props.character</button>
            <p>{text}</p>
            </div>
        </div>
    )
}

export default TextButton
