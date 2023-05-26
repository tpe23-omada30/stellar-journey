import { useState } from "react"

import "./question.css"

/**
 * A question with 4 choices.
 *
 * @param {object} props
 * @param {import('../data/Questions').Question} props.question The question.
 * @param {number} props.correct The number of the correct choice (0 for A, 1
 * for B, etc).
 */
export default function MultipleChoiceQuestion({ question, correct }) {

	const [choice, setChoice] = useState(-1);

	function onChoiceClick(index) {
		// Don't allow choosing an answer more than once
		if (choice !== -1) return;

		setChoice(index);
	}

	return <div className="question-container multiple-choice-question">
		<div className="question">{question.q}</div>
		<div className="choices">{
			question.a.map((text, i) => {
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