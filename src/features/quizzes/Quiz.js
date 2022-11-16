import { Link, useParams } from "react-router-dom";
import Card from "../cards/Card";
import ROUTES from "../../app/routes";

export function Quiz({quiz}) {
    return (
        <section>
          <h1>{quiz.name}</h1>
          <ul className="cards-list">
            {quiz.cardIds.map((id) => (
              <Card key={id} id={id} />
            ))}
          </ul>
          <Link to={ROUTES.newQuizRoute()} className="button center">
            Create a New Quiz
          </Link>
        </section>
      );
}