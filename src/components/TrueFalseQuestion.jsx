import { useState } from "react"

import "./question.css"

/**
 * A question with 2 choices, true or false
 *
 * @param {object} props
 * @param {import('../data/Questions').TrueFalseQuestion} props.question The question.
 */
export default function TrueFalseQuestion({ question }) {

	const [choice, setChoice] = useState(null);

	function handleClick(c) {
		// Don't allow choosing an answer more than once
		if (choice !== null) return;

		setChoice(c);
    }

    const isTrueCorrect = choice !== null && question.correct === true;
    const isTrueWrong = choice === true && question.correct !== true;
    const isFalseCorrect = choice !== null && question.correct === false;
    const isFalseWrong = choice === false && question.correct !== false;

	return <div className="question-container multiple-choice-question">
		<div className="question">{question.q}</div>
		<div className="choices">
            <div className="choice-container">
                <div
                    className={
                        `choice center`
                        + (isTrueCorrect ? ' choice-correct' : '')
                        + (isTrueWrong ? ' choice-wrong' : '')
                    }
                    onClick={() => handleClick(true)}
                >Σωστό</div>
            </div>
            <div className="choice-container">
                <div
                    className={
                        `choice center`
                        + (isFalseCorrect ? ' choice-correct' : '')
                        + (isFalseWrong ? ' choice-wrong' : '')
                    }
                    onClick={() => handleClick(false)}
                >Λάθος</div>
            </div>
		</div>
	</div>
}