import Classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

export default function Answers() {
  return (
    <div className={Classes.answers}>
      <Checkbox className={Classes.answer}>A New Hope 1</Checkbox>
      <Checkbox className={Classes.answer}>A New Hope 1</Checkbox>
      <Checkbox className={Classes.answer}>A New Hope 1</Checkbox>
      <Checkbox className={`${Classes.answer} ${Classes.correct}`}>
        A New Hope 1
      </Checkbox>
      <Checkbox className={Classes.answer}>A New Hope 1</Checkbox>
      <Checkbox className={Classes.answer}>A New Hope 1</Checkbox>
      <Checkbox className={`${Classes.answer} ${Classes.wrong}`}>
        A New Hope 1
      </Checkbox>
      <Checkbox className={Classes.answer}>A New Hope 1</Checkbox>
      <Checkbox className={Classes.answer}>A New Hope 1</Checkbox>
      <Checkbox className={Classes.answer}>A New Hope 1</Checkbox>
    </div>
  );
}
