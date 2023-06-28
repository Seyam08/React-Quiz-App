import { Fragment } from "react";
import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

export default function Answers({ options = [], handelChange, input }) {
  return (
    <div className={classes.answers}>
      {options.map((setQues, index) => (
        <Fragment key={index}>
          {input ? (
            <Checkbox
              className={classes.answer}
              key={index}
              value={index}
              checked={setQues.checked}
              onChange={(e) => handelChange(e, index)}
            >
              {setQues.title}
            </Checkbox>
          ) : (
            <Checkbox
              className={`${classes.answer} ${
                setQues.correct
                  ? classes.correct
                  : setQues.checked
                  ? classes.wrong
                  : null
              }`}
              key={index}
              onChange={(e) => handelChange(e, index)}
              defaultChecked={setQues.checked}
              disabled
            >
              {setQues.title}
            </Checkbox>
          )}
        </Fragment>
      ))}
    </div>
  );
}
