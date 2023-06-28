import _ from "lodash";
import { useLocation, useParams } from "react-router-dom";
import useAnswers from "../../hooks/useAnswers";
import Analysis from "../Analysis";
import Summary from "../Summary";

export default function Result() {
  const { id } = useParams();
  const { state } = useLocation();
  const { qna } = state;

  const { loading, error, answers } = useAnswers(id);

  const calculate = () => {
    let score = 0,
      numOfCorrect = 0;

    answers.forEach((question, index1) => {
      let correctIndexs = [],
        checkedIndexs = [];

      question.options.forEach((option, index2) => {
        if (option.correct) {
          correctIndexs.push(index2);
        }
        if (qna[index1].options[index2].checked) {
          checkedIndexs.push(index2);
          option.checked = true;
        }
      });

      if (_.isEqual(correctIndexs, checkedIndexs)) {
        score = score + 5;
        numOfCorrect = numOfCorrect + 1;
      }
    });

    return { score, numOfCorrect };
  };
  const userScore = calculate();

  return (
    <>
      {loading && <div>loading.....</div>}
      {error && <div>something went wrong!</div>}
      {answers && answers.length > 0 && (
        <>
          <Summary score={userScore.score} noq={answers.length} />
          <Analysis
            answers={answers}
            numOfCorrectAns={userScore.numOfCorrect}
            noq={answers.length}
          />
        </>
      )}
    </>
  );
}
