import { useState } from "react";
import Planets from "../data/Planets";

/**
 * @param {object} props
 * @param {import("../data/Planets").Planet} props.planet
 * @param {import("../data/Questions").PicturesQuestion} props.question
 */
export default function PicturesQuestion({ planet, question }) {

    // Calculate the random choices only once
    const [[choices, correctIndex], _] = useState(() => {
        // Select three random planets (that are not the correct answer or the question planet)
        let possiblePlanets = Object.keys(Planets).filter(p => p !== question.correct && p !== planet);
        let choices = [];
        for (let i = 0; i < 3; i++){
            let rand = Math.floor(Math.random() * possiblePlanets.length);
            choices.push(possiblePlanets.splice(rand, 1)[0]);
        }

        let correctIndex = Math.floor(Math.random() * 3);
        choices.splice(correctIndex, 0, question.correct);

        return [choices, correctIndex];
    })

    const [choice, setChoice] = useState(-1);

    function handleClick(i) {
        // Don't allow making a choice more than once
        if (choice !== -1) return;

        setChoice(i);
    }

    return <div className="question-container pictures-question">
        <div className="question">{question.q}</div>
        <div className="choices">{
            choices.map((planet, i) => {
                let isCorrectChoice = choice !== -1 && i === correctIndex;
				let isWrongChoice = choice === i && i !== correctIndex;

				const correctnessClass = isCorrectChoice ? "choice-correct"
					: (isWrongChoice ? "choice-wrong" : "");

                return <div className={`choice-container ${correctnessClass}`}>
                    <div
                        className="image-container"
                        onClick={() => handleClick(i)}
                    >
                        <img src={Planets[planet].image} alt={Planets[planet].name} />
                        <div className="background"></div>
                    </div>
                    <div
                        className="caption center"
                        onClick={() => handleClick(i)}
                    >{Planets[planet].name}</div>
                </div>
            })
        }</div>
    </div>
}