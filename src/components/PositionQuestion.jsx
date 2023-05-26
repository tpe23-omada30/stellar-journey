import "./question.css"

const PLANETS = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
const SIZES =   [0.09,      0.27,    0.3,    0.15,   0.9,        0.7,      0.32,     0.31];

export default function PositionQuestion() {
	return <div className="question-container position-question">
		<div className="question">Σε ποια θέση βρίσκεται ο [πλανήτης];</div>
		<div className="planets">{
			PLANETS.map((planet, i) => (<>
				<div className="square" style={{gridRow: 1}}>
					<div className="square-content center">
						<div className="planet" style={{
							width: `${SIZES[i]*100}%`,
							height: `${SIZES[i]*100}%`
						}}></div>
					</div>
				</div>
				<div className="square numeral" style={{gridRow: 2}}>
					<div className="square-content center">
						{i+1}
					</div>
				</div>
			</>))
		}</div>
	</div>
}