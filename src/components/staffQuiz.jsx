import React, { useState } from "react";
import "./staffQuiz.css";
export default function staffQuiz({
  questions,
  returnToMainMenu,
  currentQuestion,
  setCurrentQuestion,
  handleViewScoreClick,
  showScore,
  setShowScore,
  response,
  selectedAnswer,
  setSelectedAnswer,
  setResponse,
  play,
  isAnswered,
  setIsAnswered,
  setScore, // Pass the setScore function as a prop
  setQuestionCount, // Pass the setQuestionCount function as a prop
  percentageScore,
  setPercentageScore,
  getNextQuestion,
  handleAnswerOptionClick,
  restartQuiz,
  score, // Pass the score as a prop
  questionCount, // Pass the questionCount as a prop
  startFretboardQuiz,
  startStaffQuiz,
  viewScoreText,
  setViewScoreText,
  handleViewScoreHover,
  handleViewScoreLeave,
  clickedButton
}) {
  const question = questions[currentQuestion];
  function getScore() {
    setShowScore(true);
  }
  return (
    <div className="parent-container">
        <div
          style={{
            width: "105%",
            maxWidth: "1920px",
            minWidth: "480px",
            overflow: "hidden",
          }}
        >
 <div className="staffquiz">
  <button onClick={startFretboardQuiz}>Fretboard</button>
  <div class="relative-container">
    <div class="dropdown dropdown1">
      <p>Hint?</p>
      <div class="dropdown-content">
        <img className="hint" src={questions[currentQuestion].answerHint} />
        <div class="desc"></div>
      </div>
    </div>
    <div>
      <img className="staff" src={questions[currentQuestion].questionImage} alt="Question" />
    </div>
  </div>
</div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button
              className={`answer key ${selectedAnswer === answerOption.answerText ? (answerOption.isCorrect ? 'correct-button' : 'incorrect-button') : ''}`}
              key={index}
              id="answer-button"
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
