import React from 'react';


export default function Intro(props) {
    return (
        <div id="introBlock">
            <h1 id="intro--title">Quizzical</h1>
            <p id="intro--description">This is my final project from Learn React course on Scrimba. Start the game to receive 5 random questions and try to answer all of them correctly. Good luck!</p>
            <button onClick={props.startGame}>Start Game</button>
            
        </div>
    )
}