/**
 * @typedef Question
 * @property {string} q The question.
 * @property {string[]} a The answer choices.
 * @property {number} correct The index of the correct answer.
 * @property {boolean} [noShuffle] Whether the choices should be shuffled or not.
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
			a: ["Γη", "Άρης", "Ερμής", "Ουρανός"],
			correct: 0,
		},
		{
			q: "Ποιο αέριο υπάρχει σε μεγάλη ποσότητα στην ατμόσφαιρα της Αφροδίτης;",
			a: ["Διοξείδιο του άνθρακα", "Οξυγόνο", "Άζωτο", "Ήλιο"],
			correct: 0,
		},
		{
			q: "Πόσα φεγγάρια έχει η Αφροδίτη;",
			a: ["0", "1", "2", "3"],
			correct: 0,
			noShuffle: true,
		}
	],
	mars: [
		{
			q: "Πόσα φεγγάρια έχει ο Άρης;",
			a: ["0", "1", "2", "3"],
			correct: 0,
			noShuffle: true,
		},
		{
			q: "Ποιο στοιχείο δίνει στον Άρη κόκκινο χρώμα;",
			a: ["Σίδηρος", "Χαλκός", "Μόλυβδος", "Μαγνήσιο"],
			correct: 0,
		}
	]
};

export default Questions;