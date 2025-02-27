import React, { useState, useEffect } from "react";

const questions = [
  { question: "En quelle année la Révolution française a-t-elle commencé ?", options: ["1776", "1789", "1804", "1815"], answer: "1789" },
  { question: "Quel est le plus grand océan du monde ?", options: ["Atlantique", "Indien", "Pacifique", "Arctique"], answer: "Pacifique" },
  { question: "Quelle est la capitale du Japon ?", options: ["Pékin", "Séoul", "Tokyo", "Bangkok"], answer: "Tokyo" },
  { question: "Qui a remporté la Coupe du Monde de la FIFA en 2018 ?", options: ["Brésil", "Allemagne", "France", "Espagne"], answer: "France" },
  { question: "Quelle est la formule chimique de l'eau ?", options: ["CO₂", "O₂", "H₂O", "NH₃"], answer: "H₂O" },
];

const Quiz = () => {
  const [loading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000); // Simule un chargement de 3 secondes
  }, []);

  useEffect(() => {
    if (timeLeft > 0 && !loading) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleNextQuestion();
    }
  }, [timeLeft, loading]);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(30);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container text-center py-5">
        <div className="quizz-question">
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
          <p>Chargement...</p>
        </div>
      ) : showScore ? (
        <div className="score-card">
          <h2>🎉 Quiz terminé !</h2>
          <p>Votre score : {score} / {questions.length}</p>
          <button className="btn btn-primary" onClick={() => window.location.reload()}>Rejouer</button>
        </div>
      ) : (
        <div>
          <h2>🧠 {questions[currentQuestion].question}</h2>
          <div className="timer">⏳ {timeLeft} sec</div>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} className="btn btn-outline-primary m-2" onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Quiz;

// CSS styles (ajoute ces styles dans un fichier CSS)
/*

*/
