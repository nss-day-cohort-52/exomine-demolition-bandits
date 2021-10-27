import { getColonies, getGovernors } from "./database.js"

const colonies = getColonies()
const governors = getGovernors()

// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "colony") {
//             setColonies(parseInt(event.target.value))
//         }
//     }
// )

export const colonyChoices = () => {
    let html = ""

    let getColony = getGovernors()

    for (const colony of colonies) {
        if (colony.id === getColony.colonyId) {
            return `${colony.name}`
        } else {
            return "Colony Minerals"
        }
    }

return html += `${colony.name}`

}