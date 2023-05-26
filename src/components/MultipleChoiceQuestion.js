import { useState } from "react"

import "./question.css"

/**
 * A question with 4 choices.
 *
 * @param {object} props
 * @param {string} props.question The text of the question.
 * @param {string} props.A The text of the first choice.
 * @param {string} props.B The text of the second choice.
 * @param {string} props.C The text of the third choice.
 * @param {string} props.D The text of the fourth choice.
 * @param {number} props.correct The number of the correct choice (0 for A, 1
 * for B, etc).
 */
export default function MultipleChoiceQuestion({ question, A, B, C, D, correct }) {

	const [choice, setChoice] = useState(-1);

	function onChoiceClick(index) {
		// Don't allow choosing an answer more than once
		if (choice !== -1) return;

		setChoice(index);
	}

	const choiceTexts = [A, B, C, D];

	return <div className="question-container multiple-choice-question">
		<div className="question">{question}</div>
		<div className="choices">{
			choiceTexts.map((text, i) => {
				const isCorrectAnswer = choice !== -1 && i === correct;
				const isWrongAnswer = choice === i && i !== correct;

				return <div className="choice-container">
					<div
						key={i}
						className={
							`choice choice-${i}`
							+ (isCorrectAnswer ? ' choice-correct' : '')
							+ (isWrongAnswer ? ' choice-wrong' : '')
						}
						onClick={() => onChoiceClick(i)}
					>{text}</div>
				</div>
			})
		}
		</div>
	</div>
}