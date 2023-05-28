import Questions from "../data/Questions";
import MultipleChoiceQuestion from "../components/MultipleChoiceQuestion";
import PositionQuestion from "../components/PositionQuestion";
import PicturesQuestion from "../components/PicturesQuestion";
import TrueFalseQuestion from "../components/TrueFalseQuestion";

/**
 * Displays a random question about a specific planet.
 */
export default function PlanetQuestion({ planet }) {
	let questions = Questions[planet];

	// Pick a random question
	let question = questions[Math.floor(Math.random() * questions.length)];

	switch (question.type){
		case "mc":
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
					if (i === question.correct){
						question.correct = j;
					} else if (j === question.correct) {
						question.correct = i;
					}
				}
			}

			return <MultipleChoiceQuestion
				question={question}
			></MultipleChoiceQuestion>

		case "pos":
			return <PositionQuestion question={question}></PositionQuestion>

		case "pics":
			return <PicturesQuestion question={question}></PicturesQuestion>

		case "tf":
			return <TrueFalseQuestion question={question}></TrueFalseQuestion>
	}

}