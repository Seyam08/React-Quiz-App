import { useLocation, useParams } from "react-router-dom";
import useAnswers from "../../hooks/useAnswers";
import Analysis from "../Analysis";
import Summary from "../Summary";

export default function Result() {
  const { id } = useParams();
  const { state } = useLocation();
  const qna = state;

  const { loading, error, answers } = useAnswers(id);

  const calculate = () => {
    let score = 0;
  };
  console.log(answers);
  return (
    <div>
      <Summary />
      <Analysis />
    </div>
  );
}
