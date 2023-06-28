import classes from "../styles/Analysis.module.css";
import Question from "./Question";

export default function Analysis({ answers ,numOfCorrectAns, noq}) {
  return (
    <div className={classes.analysis}>
      <h1>Question Analysis</h1>
      <h4>You answerd {numOfCorrectAns} out of {noq} questions correctly</h4>

      <Question answers={answers} />
    </div>
  );
}
