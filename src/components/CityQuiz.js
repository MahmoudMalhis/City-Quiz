import React, { useState } from "react";
import { submitForm } from "./formHelpers";

export default function CityQuiz() {
  const [answer, setAnswer] = useState("");
  const [formState, setFormState] = useState("empty");

  async function handleFormSubmit(e) {
    e.preventDefault();
    setFormState("submitting");
    try {
      await submitForm(answer);
      setFormState("success");
    } catch (err) {
      setFormState("error");
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
    if (e.target.value.length === 0) {
      setFormState("empty");
    } else {
      setFormState("typing");
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>City quiz</h2>
      <p>What city is located on two continents?</p>
      <textarea value={answer} onChange={handleTextareaChange}></textarea>
      <br />
      {formState === "empty" && <button disabled>Submit</button>}
      {formState === "typing" && <button>Submit</button>}
      {formState === "submitting" && <p>Loading...</p>}
      {formState === "error" && (
        <p style={{ color: "red" }}>
          Good guess but a wrong answer. Try again!
        </p>
      )}
      {formState === "success" && <h1>That's right!</h1>}
    </form>
  );
}
