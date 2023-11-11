import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { TextQuestion } from "../../interfaces/question";
import { QuestionaireProps } from "./types";
import "./styles.css";
import { shuffleArray } from "../../helpers/utils";

function Questionaire({ questions }: QuestionaireProps) {
  const [answersMap, setAnswersMap] = useState<Map<number, number>>(new Map());
  const [shuffledQuestions, setShuffledQuestions] = useState<
    Array<TextQuestion>
  >([]);
  const [wrongQstsSet, setWrongQstsSet] = useState<Set<number>>(new Set());
  const [answeredSet, setAnsweredSet] = useState<Set<number>>(new Set());
  const [finished, setFinished] = useState(false);

  /**
   * Validates if the selected radio button for the question is correct to remove it
   * from the set of wrongQuestions or adds it in case it's wrong
   * @param event radioInput change
   */
  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const questionIdNumber = Number(event.target.name);
    const questionAnswerId = Number(event.target.value);
    const isWrong = answersMap.get(questionIdNumber) !== questionAnswerId;
    const newWrongSet = new Set(wrongQstsSet);
    //add question to answered set
    const newAnsweredSet = new Set(answeredSet);
    newAnsweredSet.add(questionIdNumber);
    if (isWrong) {
      newWrongSet.add(questionIdNumber);
    } else {
      newWrongSet.delete(questionIdNumber);
    }
    setWrongQstsSet(newWrongSet);
    setAnsweredSet(newAnsweredSet);
  }

  /**
   * Prevents submit default action and sets the finished state
   * @param event submit event
   */
  function handleValidateAnswers(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFinished(true);
  }

  /**
   * Creates a map with each question-answer and shuffles the received
   * questions
   */
  useEffect(() => {
    const mapWithAnswers = new Map();
    questions.forEach((question) =>
      mapWithAnswers.set(question.questionId, question.answer)
    );
    //ShuffleQuestions
    const shuffledQ = shuffleArray<TextQuestion>(questions);
    setShuffledQuestions(shuffledQ);
    setAnswersMap(mapWithAnswers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="questionaire">
      <form onSubmit={handleValidateAnswers}>
        {shuffledQuestions.map((question) => {
          return (
            <div
              key={`Q${question.questionId}`}
              className="questionaire__question-container"
            >
              <span>{question.sentence}</span>
              {question.options.map((option) => (
                <div
                  key={`ques${question.questionId}-opt${option.id}`}
                  className="questionaire__option-container"
                >
                  <input
                    type="radio"
                    id={`ques${question.questionId}-opt${option.id}`}
                    name={`${question.questionId}`}
                    value={option.id}
                    onChange={handleInputChange}
                  />
                  <label
                    htmlFor={`ques${question.questionId}-opt${option.id}`}
                    className="questionaire__option-text"
                  >
                    {option.text}
                  </label>
                </div>
              ))}
              {Array.from(wrongQstsSet).includes(question.questionId) &&
                finished && (
                  <span className="red">
                    <FontAwesomeIcon
                      icon={faExclamation}
                      className="questionaire__wrong-icon"
                    />
                    No exactamente, revisa tu respuesta
                  </span>
                )}
            </div>
          );
        })}

        <button
          aria-label="finish questionaire"
          disabled={answeredSet.size < questions.length}
          type="submit"
        >
          Calificar
        </button>
      </form>
    </div>
  );
}

export default Questionaire;
