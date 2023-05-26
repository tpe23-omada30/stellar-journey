/**
 * @typedef MultipleChoiceQuestion
 * @property {"mc"} type The type of the question.
 * @property {string} q The question.
 * @property {string[]} a The answer choices.
 * @property {number} correct The index of the correct answer.
 * @property {boolean} [noShuffle] Whether the choices should be shuffled or not.
 */

/**
 * @typedef PositionQuestion
 * @property {"pos"} type The type of the question.
 * @property {string} q The question.
 * @property {number} position The position of the planet.
 */

/**
 * @typedef {MultipleChoiceQuestion|PositionQuestion} Question
 */

/**
 * An object containing all the questions for each planet.
 *
 * @type {Object<string, Question[]>}
 */
const Questions = {
	venus: [
		{
			type: "pos",
			q: "Σε ποια θέση βρίσκεται η Αφροδίτη;",
			position: 1
		},
		{	type: "mc",
			q: "Με ποιον πλανήτη μοιάζει περισσότερο η Αφροδίτη;",
			a: ["Γη", "Άρης", "Ερμής", "Ουρανός"],
			correct: 0,
		},
		{
			type: "mc",
			q: "Ποιο αέριο υπάρχει σε μεγάλη ποσότητα στην ατμόσφαιρα της Αφροδίτης;",
			a: ["Διοξείδιο του άνθρακα", "Οξυγόνο", "Άζωτο", "Ήλιο"],
			correct: 0,
		},
		{
			type: "mc",
			q: "Πόσα φεγγάρια έχει η Αφροδίτη;",
			a: ["0", "1", "2", "3"],
			correct: 0,
			noShuffle: true,
		}
	],
	mars: [
		{
			type: "pos",
			q: "Σε ποια θέση βρίσκεται ο Άρης;",
			position: 3,
		},
		{
			type: "mc",
			q: "Πόσα φεγγάρια έχει ο Άρης;",
			a: ["0", "1", "2", "3"],
			correct: 2,
			noShuffle: true,
		},
		{
			type: "mc",
			q: "Ποιο στοιχείο δίνει στον Άρη κόκκινο χρώμα;",
			a: ["Σίδηρος", "Χαλκός", "Μόλυβδος", "Μαγνήσιο"],
			correct: 0,
		}
	],
	jupiter: [
		{
			type: "pos",
			q: "Σε ποια θέση βρίσκεται ο Δίας;",
			position: 4,
		},
		{
			type: "mc",
			q: "Πως λέγεται η μεγάλη καταιγίδα που συμβαίνει στον Δία;",
			a: ["Κόκκινη Κηλίδα", "Κόκκινη Καταιγίδα", "Μεγάλη Κηλίδα", "Μεγάλη Καταιγίδα"],
			correct: 0,
		}
	]
};

export default Questions;