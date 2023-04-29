import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

export default function Answers() {
  return (
    <div className={classes.answers}>
      <Checkbox className={classes.answer}>A New Hope 1</Checkbox>
      <Checkbox className={classes.answer}>A New Hope 1</Checkbox>
      <Checkbox className={classes.answer}>A New Hope 1</Checkbox>
      <Checkbox className={`${classes.answer} ${classes.correct}`}>
        A New Hope 1
      </Checkbox>
      <Checkbox className={classes.answer}>A New Hope 1</Checkbox>
      <Checkbox className={classes.answer}>A New Hope 1</Checkbox>
      <Checkbox className={`${classes.answer} ${classes.wrong}`}>
        A New Hope 1
      </Checkbox>
      <Checkbox className={classes.answer}>A New Hope 1</Checkbox>
      <Checkbox className={classes.answer}>A New Hope 1</Checkbox>
      <Checkbox className={classes.answer}>A New Hope 1</Checkbox>
    </div>
  );
}
