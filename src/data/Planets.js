import Mercury from "../assets/mercury.png"
import Venus from "../assets/venus.png"
import Earth from "../assets/earth.png"
import Mars from "../assets/mars.png"
import Jupiter from "../assets/jupiter.png"
import Saturn from "../assets/saturn.png"
import Uranus from "../assets/uranus.png"
import Neptune from "../assets/neptune.png"

/**
 * @typedef {"mercury"|"venus"|"earth"|"mars"|"jupiter"|"saturn"|"uranus"|"neptune"} Planet
 */

/**
 * @typedef PlanetInfo
 * @property {string} name The display name of the planet.
 * @property {string} image The URL of an image of the planet.
 */

/** @type {Object<Planet, PlanetInfo>} */
const Planets = {
    mercury: {
        name: "Ερμής",
        image: Mercury,
    },
    venus: {
        name: "Αφροδίτη",
        image: Venus,
    },
    earth: {
        name: "Γη",
        image: Earth,
    },
    mars: {
        name: "Άρης",
        image: Mars,
    },
    jupiter: {
        name: "Δίας",
        image: Jupiter,
    },
    saturn: {
        name: "Κρόνος",
        image: Saturn,
    },
    uranus: {
        name: "Ουρανός",
        image: Uranus,
    },
    neptune: {
        name: "Ποσειδώνας",
        image: Neptune,
    }
};

export default Planets;