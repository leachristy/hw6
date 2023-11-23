import React, { useState, useEffect } from "react";

export default function FetchApi() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTrivia = async () => {
      try {
        const response = await fetch("https://opentdb.com/api.php?amount=10&type=multiple");
        const json = await response.json();
        console.log(json);
        setQuestions(json.results);
      } catch (error) {
        console.error("Error fetching trivia:", error);
        setError("Error fetching trivia. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getTrivia();
  }, []); // Empty dependency array to run the effect only once

  const Questions = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>{error}</p>;
    }

    return (
      <ul>
        {questions.map((item) => (
          <li key={item.question}>
            Question: {item.question} / Answer: {item.correct_answer}
          </li>
        ))}
      </ul>
    );
  };

  return <Questions />;
}
