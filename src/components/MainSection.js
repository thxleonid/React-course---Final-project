import React from 'react';
import Question from './Question'

export default function MainSection(props) {
    const [userAnswers, setUserAnswers] = React.useState(["", "", "", "", ""])
    const [checkingAnswers, setCheckingAnswers] = React.useState(false)
    const [score, setScore] = React.useState(0)

    function setAnswer(e) {
        const {name, value} = e.target
        console.log(`${name} ${value}`)
        setUserAnswers(x => {
            let arr = [...x]
            arr[name] = value
            console.log(arr)
            return arr
        })
    }

    

    let questionId = -1
    const questions = props.questions
    const questionElements = questions.map(x => {
        questionId++
        return <Question 
                    key={questionId} 
                    id={questionId} 
                    q={x.question} 
                    a={x.questionAnswers} 
                    correct_answer={x.correct_answer}
                    userAnswers={userAnswers} 
                    setAnswer={setAnswer}
                    gameActive={props.newGame}
                    checkingAnswers={checkingAnswers}
                />
    })


    function handleSubmit(event) {
        let userScore = 0
        event.preventDefault()
        console.log("checking answers")
        // submitToApi(formData)
        let check = true
        for (let i = 0; i < 5; i++)
        {
            if (questions[i].correct_answer != userAnswers[i]) {
                check = false
            } else {userScore++}
        }
        
        console.log(check ? "YOU WON" : "YOU LOST")
        setScore(userScore)
        setCheckingAnswers(true)
    }

    function restartGame() {
        setCheckingAnswers(false)
        props.newGame()
    }

    return (
        <main>
            <form onSubmit={handleSubmit}>
                {questionElements}
                {!checkingAnswers && <button id="checkAnswers" >Check answers</button>}
                {checkingAnswers && <span>
                                        You scored {score}/5 correct answers
                                        <button id="newGame" onClick={restartGame}>New game</button>
                                    </span>}
            </form>
        </main>
    )
}