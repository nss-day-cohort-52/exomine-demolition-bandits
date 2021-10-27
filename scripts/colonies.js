import { getColonies, getGovernors, getMinerals, getTransState } from "./database.js"

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

    let getGovernor = getGovernors()
    let getMineral = getMinerals()
    const state = getTransState()
    
    const foundGovernorObj = getGovernor.find(
        (governorObj) => {
           return governorObj.id === state.governorId
        }
 
    )
debugger
    for (const colony of colonies) {
        if (colony.id === foundGovernorObj.colonyId) {
            html += `${colony.name}`
        } else {
            html += `"Colony Minerals"`
        }
    }

return html += `${colony.name}`

}