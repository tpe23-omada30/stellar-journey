import MultipleChoiceQuestion from "../components/MultipleChoiceQuestion";

/**
 * @typedef Question
 * @property {string} q The question.
 * @property {string[]} a The answer choices. The first element should be the
 * correct answer.
 */

/**
 * An object containing all the questions for each planet.
 *
 * @type {Object<string, Question[]>}
 */
const Questions = {
	venus: [
		{
			q: "Με ποιον πλανήτη μοιάζει περισσότερο η Αφροδίτη;",
			a: ["Γη", "Άρης", "Ερμής", "Ουρανός"]
		},
		{
			q: "Ποιο αέριο υπάρχει σε μεγάλη ποσότητα στην ατμόσφαιρα της Αφροδίτης;",
			a: ["Διοξείδιο του άνθρακα", "Οξυγόνο", "Άζωτο", "Ήλιο"]
		},
		{
			q: "Πόσα φεγγάρια έχει η Αφροδίτη;",
			a: ["0", "1", "2", "3"]
		}
	],
	mars: [
		{
			q: "Πόσα φεγγάρια έχει ο Άρης;",
			a: ["0", "1", "2", "3"]
		},
		{
			q: "Ποιο στοιχείο δίνει στον Άρη κόκκινο χρώμα;",
			a: ["Σίδηρος", "Χαλκός", "Μόλυβδος", "Μαγνήσιο"]
		}
	]
}

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