/**
 * @typedef MultipleChoiceQuestion
 * @property {"mc"} type The type of the question.
 * @property {string} q The question.
 * @property {string[]} a The answer choices.
 * @property {number} correct The index of the correct answer.
 * @property {boolean} [noShuffle] Whether the choices should be shuffled or not.
 */

/**
 * @typedef TrueFalseQuestion
 * @property {"tf"} type The type of the question.
 * @property {string} q The question.
 * @property {boolean} correct The correct answer.
 */

/**
 * @typedef PositionQuestion
 * @property {"pos"} type The type of the question.
 * @property {string} q The question.
 * @property {number} position The position of the planet.
 */

/**
 * @typedef PicturesQuestion
 * @property {"pics"} type The type of the question.
 * @property {string} q The question.
 * @property {import("../data/Planets").Planet} correct The correct answer.
 */

/**
 * @typedef {MultipleChoiceQuestion|TrueFalseQuestion|PositionQuestion|PicturesQuestion} Question
 */

/**
 * An object containing all the questions for each planet.
 *
 * @type {Object<string, Question[]>}
 */
const Questions = {
	mercury: [
		{
			type: "pos",
			q: "Σε ποια θέση βρίσκεται ο Ερμής;",
			position: 0,
		},
		{
			type: "mc",
			q: "Πόσα φεγγάρια έχει ο Ερμής;",
			a: ["Κανένα", "Ένα", "Δύο", "Τέσσερα"],
			correct: 0,
			noShuffle: true,
		}
	],
	venus: [
		{
			type: "pos",
			q: "Σε ποια θέση βρίσκεται η Αφροδίτη;",
			position: 1
		},
		{	type: "pics",
			q: "Με ποιον πλανήτη μοιάζει περισσότερο η Αφροδίτη;",
			correct: "earth",
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
	],
	saturn: [
		{
			type: "pos",
			q: "Σε ποια θέση βρίσκεται ο Κρόνος;",
			position: 5,
		},
		{
			type: "mc",
			q: "Ποιος είναι ο μεγαλύτερος δορυφόρος του Κρόνου;",
			a: ["Τιτάνας", "Ιάπετος", "Ρέα", "Διόνη"],
			correct: 0,
		}
	],
	uranus: [
		{
			type: "pos",
			q: "Σε ποια θέση βρίσκεται ο Ουρανός;",
			position: 6,
		},
		{
			type: "pics",
			q: "Με ποιόν πλανήτη μοιάζει περισσότερο ο Ουρανός;",
			correct: "neptune"
		},
		{
			type: "mc",
			q: "Ποιο άεριο δίνει στον Ουρανό μπλε χρώμα;",
			a: ["Μεθάνιο", "Οξυγόνο", "Αμμωνία", "Υδρογόνο"],
			correct: 0,
		},
	],
	neptune: [
		{
			type: "pos",
			q: "Σε ποια θέση βρίσκεται ο Ποσειδώνας;",
			position: 7,
		},
		{
			type: "pics",
			q: "Με ποιόν πλανήτη μοιάζει περισσότερο ο Ποσειδώνας;",
			correct: "uranus",
		},
		{
			type: "mc",
			q: "Ποιο άεριο δίνει στον Ποσειδώνα μπλε χρώμα;",
			a: ["Μεθάνιο", "Αιθάνιο", "Αμμωνία", "Υδρογόνο"],
			correct: 0,
		},
	]
};

export default Questions;