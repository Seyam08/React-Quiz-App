import { getDatabase, ref, set } from "firebase/database";
import _ from "lodash";
import { useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import useQuestions from "../../hooks/useQuestions";
import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";

const initialState = null;

const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;
    case "answer":
      const cloneQues = _.cloneDeep(state);
      cloneQues[action.quesID].options[action.optionIndex].checked =
        action.value;
      return cloneQues;
    default:
      return state;
  }
};

export default function Quiz() {
  const { id } = useParams();
  const { loading, error, questions } = useQuestions(id);
  const [currentQues, setCurrentQues] = useState(0);
  const [qna, dispatch] = useReducer(reducer, initialState);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  const handelAnsChange = (e, index) => {
    dispatch({
      type: "answer",
      quesID: currentQues,
      optionIndex: index,
      value: e.target.checked,
    });
  };

  // handle when user clicks the next button to get the next question
  const nextQues = () => {
    if (currentQues <= questions.length) {
      setCurrentQues((prevCurrent) => prevCurrent + 1);
    }
  };
  // handle when user clicks the prev button to get back to the previous question
  const prevQues = () => {
    if (currentQues <= questions.length && currentQues >= 1) {
      setCurrentQues((prevCurrent) => prevCurrent - 1);
    }
  };
  // calculate percentage of progress
  const percentage =
    questions.length > 0 ? ((currentQues + 1) / questions.length) * 100 : 0;

  // submit quiz
  const submit = async () => {
    const { uid } = currentUser;

    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);

    await set(resultRef, {
      [id]: qna,
    });

    navigate(`/result/${id}`, { state: { qna } });
  };

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>Something went wrong</div>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1>{qna[currentQues].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answers
            input
            options={qna[currentQues].options}
            handelChange={handelAnsChange}
          />
          <ProgressBar
            next={nextQues}
            prev={prevQues}
            progress={percentage}
            submit={submit}
          />
          <MiniPlayer />
        </>
      )}
    </>
  );
}
