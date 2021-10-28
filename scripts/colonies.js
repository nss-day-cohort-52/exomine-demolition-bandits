import { getColonies, getGovernors, getMinerals, getTransState } from "./database.js"

const colonies = getColonies()
const governors = getGovernors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "colony") {
            setColonies(parseInt(event.target.value))
        }
    }
)

// exporting/declaring colonyChoices
export const colonyChoices = () => {

  // declaring the getGovernor var to return a list of governors
  // by executing the function getGovernor
    let getGovernor = getGovernors()

  //declaring the getMinerals var to return a list of minerals 
  // by executing the function getMinerals
    let getMineral = getMinerals()

    //declaring the state var to return a list of transState 
   // by executing the function getTransState
    const state = getTransState()
    
    //declaring var for finding governor. 
    // initially this will be undefined, until a governor is selected
    const foundGovernorObj = getGovernor.find(
        (governorObj) => {
           return governorObj.id === state.governorId
        }
 
    )

    //iterating over a list of colonies to match with governor to return colony name.
    for (let colony of colonies) {
        if (foundGovernorObj && colony.id == foundGovernorObj.colonyId) {
            return `${colony.name}`
        } 
        
    }
    //return string "colony materials" if no governor or colony is selected.
    return "Colony Materials"
}
