import ROUTES from "../../app/routes";
import { Link } from "react-router-dom";

export function Topic({ topic, quizzesForTopic }) {
    return (
        <section>
          <img src={topic.icon} alt="" className="topic-icon" />
          <h1>Topic: {topic.name}</h1>
          <ul className="quizzes-list">
            {quizzesForTopic.map((quiz) => (
              <li className="quiz" key={quiz.id}>
                <Link to={ROUTES.quizRoute(quiz.id)}>{quiz.name}</Link>
              </li>
            ))}
          </ul>
          <Link to="/quizzes/new" className="button center">
            Create a New Quiz
          </Link>
        </section>
      );
}