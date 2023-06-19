import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

export default function Answers({ options = [], handelChange }) {
  return (
    <div className={classes.answers}>
      {options.map((setQues, index) => (
        <Checkbox
          className={classes.answer}
          key={index}
          value={index}
          checked={setQues.checked}
          onChange={(e) => handelChange(e, index)}
        >
          {setQues.title}
        </Checkbox>
      ))}
    </div>
  );
}
