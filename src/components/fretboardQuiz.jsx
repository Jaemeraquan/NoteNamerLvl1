import React, { useState } from "react";
import './fretboardQuiz.css';
export default function fretboardQuiz({
  questions,
  currentQuestion,
  setCurrentQuestion,
  showScore,
  setShowScore,
  response,
  setResponse,
  play,
  isAnswered,
  selectedAnswer,
  setSelectedAnswer,
  setIsAnswered,
  setScore, // Pass the setScore function as a prop
  setQuestionCount, // Pass the setQuestionCount function as a prop
  percentageScore,
  setPercentageScore,
  getNextQuestion,
  handleAnswerOptionClick,
  restartQuiz,
  score, // Pass the score as a prop
  questionCount, // Pass the questionCount as a 
  startStaffQuiz, startFretboardQuiz,
  handleViewScoreHover,
  handleViewScoreLeave,
  viewScoreText
}) {
  const question = questions[currentQuestion];
  function getScore() {
    setShowScore(true);
  }
  return (
    <div
    className="parent-container"
    >
        <div
          style={{
            width: "105%",
            maxWidth: "1920px",
            minWidth: "480px",
            overflow: "hidden",
          }}
        >
          <h class="header">Level 1
          </h>
          <div className="fretboardquiz">
          <button onClick={startStaffQuiz}>Staff</button>
            <div>
              <img
                className="fretboard"
                src={questions[currentQuestion].answerHint}
              />
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
              className={`answer key ${selectedAnswer === answerOption.answerText ? (answerOption.isCorrect ? 'correct-button' : 'incorrect-button') : ''}`}
                onClick={() => {
                  handleAnswerOptionClick(answerOption.isCorrect);
                  setSelectedAnswer(answerOption.answerText); // Set the selected answer
                }}
                style={{
                  cursor: isAnswered ? "not-allowed" : "pointer", // Disable cursor if answered
                }}
                disabled={isAnswered} // Disable the button if answered
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
          <div className="answer-section">
            <div>

            <button class="viewscore" onMouseEnter={handleViewScoreHover}
            onMouseLeave={handleViewScoreLeave}>{viewScoreText}</button>
              {/* <div className="response-container">
                <h2 id="response"> {response} </h2>
              </div> */}
            </div>
          </div>
        </div>
    </div>
  );
}
