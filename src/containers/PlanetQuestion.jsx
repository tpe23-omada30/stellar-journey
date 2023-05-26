import Questions from "../data/Questions";
import MultipleChoiceQuestion from "../components/MultipleChoiceQuestion";

/**
 * Displays a random question about a specific planet.
 */
export default function PlanetQuestion({ planet }) {
	let questions = Questions[planet];

	// Pick a random question
	let question = questions[Math.floor(Math.random() * questions.length)];

	// Used to keep track of the index of the correct answer
	let correct = 0;

	if (!question.noShuffle){
		// Shuffle the answers
		// The algorithm used is the modern version of the Fisher–Yates shuffle
		for (let i = question.a.length - 1; i > 0; i--){
			let j = Math.floor(Math.random() * (i + 1));
			// Swap
			let temp = question.a[i];
			question.a[i] = question.a[j];
			question.a[j] = temp;
			// Keep track of the correct answer
			if (i === correct){
				correct = j;
			} else if (j === correct) {
				correct = i;
			}
		}
	}

	return <MultipleChoiceQuestion
		question={question}
		correct={correct}
	></MultipleChoiceQuestion>
}