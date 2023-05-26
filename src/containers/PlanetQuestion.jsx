import Questions from "../data/Questions";
import MultipleChoiceQuestion from "../components/MultipleChoiceQuestion";

/**
 * Displays a random question about a specific planet.
 */
export default function PlanetQuestion({ planet }) {
	let questions = Questions[planet];

	// Pick a random question
	let question = questions[Math.floor(Math.random() * questions.length)];

	return <MultipleChoiceQuestion
		question={question.q}
		A={question.a[0]}
		B={question.a[1]}
		C={question.a[2]}
		D={question.a[3]}
		correct={0}
	></MultipleChoiceQuestion>
}