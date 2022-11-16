import { Link, useParams } from "react-router-dom";
import Card from "../cards/Card";
import ROUTES from "../../app/routes";
import { useSelector } from "react-redux";
import { selectQuizzes } from "./quizzesSlice";
import { Quiz } from "./Quiz";

export default function QuizPage() {
  const quizzes = useSelector(selectQuizzes); // replace this with a call to your selector to get all the quizzes in state
  let { quizId } = useParams();
  const quiz = quizzes[quizId];
 
  if(!quiz) {
    return (<section>Quiz {quizId} not found</section>)
  }
  return <Quiz quiz={quiz} />
}
