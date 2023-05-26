import { useState } from "react";

import "./question.css"

const PLANETS = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
const SIZES =   [0.09,      0.27,    0.3,    0.15,   0.9,        0.7,      0.32,     0.31];

/**
 * A question about the position of a planet in the solar system.
 *
 * @param {object} props
 * @param {import('../data/Questions').PositionQuestion} props.question
 */
export default function PositionQuestion({ question }) {

	const [choice, setChoice] = useState(-1);

	function handleClick(i){
		// Don't allow making a choice more than once
		if (choice !== -1) return;

		setChoice(i);
	}

	return <div className="question-container position-question">
		<div className="question">{question.q}</div>
		<div className="planets">{
			PLANETS.map((planet, i) => {
				let isCorrectChoice = choice !== -1 && i === question.position;
				let isWrongChoice = choice === i && i !== question.position;

				return <>
				<div className="square" style={{gridRow: 1}}>
					<div className="square-content center">
						<div
							className={
								"planet choice"
								+ (isCorrectChoice ? " choice-correct" : "")
								+ (isWrongChoice ? " choice-wrong" : "")
							}
							style={{
								width: `${SIZES[i]*100}%`,
								height: `${SIZES[i]*100}%`
							}}
							onClick={() => handleClick(i)}
						></div>
					</div>
				</div>
				<div className="square numeral" style={{gridRow: 2}}>
					<div className="square-content center" onClick={() => handleClick(i)}>
						{i+1}
					</div>
				</div>
				</>
			})
		}</div>
	</div>
}