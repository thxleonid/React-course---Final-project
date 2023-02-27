import React from 'react';

export default function Question(props) {
    const selectedStyle = {
        background: "#4D5B9E",
        border: "none"
    }

    const notSelectedStyle = {
        background: "transparent",
        border: "0.771045px solid #4D5B9E"
    }

    const correctAnswerStyle = {
        background: "#94D7A2",
        border: "none"
    }

    const incorrectSelectedStyle = {
        background: "red",
        border: "none"
    }

    function defineStyle(answerOption) {

        return props.checkingAnswers ? 
                        (props.correct_answer === answerOption ? correctAnswerStyle : 
                                    (props.userAnswers[props.id]===answerOption ? incorrectSelectedStyle : notSelectedStyle)):
                        (props.userAnswers[props.id]===answerOption ? selectedStyle : notSelectedStyle)
    }

    return (
        <div className="singleQuestion">
        
        <fieldset className="question--optionsSection">
            <legend className="question--title">{props.q}</legend>
            {/* first option */}
            <label style={defineStyle(props.a[0])}><input
                type="radio"
                id={`1-option`}
                name={props.id}
                value={props.a[0]}
                checked={props.userAnswers[props.id]===props.a[0]}
                onChange={(e) => props.setAnswer(e)}
                
                /*style={props.userAnswers[props.id]===props.a[0] ? selectedStyle : notSelectedStyle}*/
            />{props.a[0]}</label>
            <br />

            {/* second option */}
            <label style={defineStyle(props.a[1])}><input
                type="radio"
                id={`2-option`}
                name={props.id}
                value={props.a[1]}
                checked={props.userAnswers[props.id]===props.a[1]}
                onChange={(e) => props.setAnswer(e)}
            />{props.a[1]}</label>
            <br />

            {/* third option */}
            <label style={defineStyle(props.a[2])}><input
                type="radio"
                id={`3-option`}
                name={props.id}
                value={props.a[2]}
                checked={props.userAnswers[props.id]===props.a[2]}
                onChange={(e) => props.setAnswer(e)}
            />{props.a[2]}</label>
            <br />

            {/* fourth option */}
            <label style={defineStyle(props.a[3])}><input
                type="radio"
                id={`4-option`}
                name={props.id}
                value={props.a[3]}
                checked={props.userAnswers[props.id]===props.a[3]}
                onChange={(e) => props.setAnswer(e)}
            />{props.a[3]}</label>
            <br />
            

        </fieldset>

        <hr />

        </div>

        /*<div className="singleQuestion">
            <h1 className="question--title">{props.q}</h1>
            <div className="question--optionsSection">
                <div>{props.a[0]}</div>
                <div>{props.a[1]}</div>
                <div>{props.a[2]}</div>
                <div>{props.a[3]}</div>
            </div>
            <hr />
        </div>*/
    )
}