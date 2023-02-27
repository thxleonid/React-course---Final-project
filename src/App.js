import React from 'react';
import './styles.css';

import Intro from "./components/Intro"
import MainSection from "./components/MainSection"


export default function App() {
  const [gameStarted, setGameStarted] = React.useState(false)
  const [questions, setQuestions] = React.useState([])

  function unescapeHtml(safe) {
    return safe.replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'");
  }
/*
  category: 'Entertainment: Film', 
  type: 'multiple', 
  difficulty: 'easy', 
  question: 'Which actress danced the twist with John Travolta in &#039;Pulp Fiction&#039;?', 
  correct_answer: 'Uma Thurman', 
  incorrect_answers: [ 'Kathy Griffin', 'Pam Grier', 'Bridget Fonda' ] }
*/
  function startGame() {

    fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple&encode=url3986")
      .then(response => response.json())
      .then(data => {
        console.log(data)

        const questionsOutput = data.results.map(eachQuestion => {

          let questionAnswers = [...eachQuestion.incorrect_answers]
          questionAnswers.splice(Math.floor(Math.random()*3), 0, eachQuestion.correct_answer);
          questionAnswers = questionAnswers.map(x => decodeURIComponent(x))
          let outputQuestion = {
            question: decodeURIComponent(eachQuestion.question),
            correct_answer: decodeURIComponent(eachQuestion.correct_answer),
            questionAnswers: questionAnswers
          }
          return outputQuestion
        })

        setQuestions(questionsOutput)
        setGameStarted(true)
      }) 
    

  }

  return (
    <div className="App">
        
        {!gameStarted && <Intro startGame={() => startGame()}/>}
        {gameStarted && <MainSection questions={questions} newGame={startGame}/>}
    </div>
  );
}

