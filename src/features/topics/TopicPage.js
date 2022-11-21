import NewTopicForm from "../../components/NewTopicForm";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTopics } from "./topicSlice";
import { selectQuizzes } from "../quizzes/quizzesSlice";
import { Topic } from "./Topic";

export default function TopicPage() {
  const topics = useSelector(selectTopics); // replace this with a call to your selector to select all the topics in state
  const quizzes = useSelector(selectQuizzes); // replace this with a call to your selector to select all the quizzes in state
  let { topicId } = useParams();
  const topic = topics[topicId];
  const quizzesForTopic = topic?.quizIds.map((quizId) => quizzes[quizId]);


  if(!topic) {
    return (<section>Topic {topicId} not found</section>)
  }
  return <Topic topic={topic} quizzesForTopic={quizzesForTopic} />;
}
