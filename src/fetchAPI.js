import React, { useState, useEffect } from "react";

// Function to decode HTML entities
function decodeString(str) {
  const textArea = document.createElement("textarea");
  textArea.innerHTML = str;
  return textArea.value;
}

export default function FetchApi() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRandomTrivia = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=10&type=multiple"
      );
      const json = await response.json();
      // Decode HTML entities in questions and correct answers
      const decodedData = json.results.map((item) => ({
        question: decodeString(item.question),
        correct_answer: decodeString(item.correct_answer),
      }));
      setQuestions(decodedData);
    } catch (error) {
      console.error("Error fetching trivia:", error);
      setError("Error fetching trivia. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomTrivia();
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
            Question: {item.question} <br /> Answer: {item.correct_answer}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <button onClick={fetchRandomTrivia}>Generate Random Questions</button>
      <Questions />
    </div>
  );
}
