import { getMinerals, getTransState, setMinerals } from "./database.js"
import { facilityChoices } from './facilityMineral.js'
document.addEventListener(  // event listener that listens on DOM
    "click", // event type is click for when the user clicks on the Purchase Mineral button
    (changeEvent) => { // function parameter whose valur is the result of the if statement
        if (changeEvent.target.id === "Space Cart") { // comparision statement that checks if the clicked item is equal to the string "Purchase Mineral"
            const minSelect = mineralSelection()
            
        }
    }
)


const minerals = getMinerals() // storing the result of the getMinerals function, which is an Array in the minerals variable
const state = setMinerals()
const facChoice = facilityChoices()

const mineralToColonyList = () => {
    state
}

export const mineralSelection = () => { // defining an export function that will get the state of the mineral choices 
    let html = "<h2>Space Cart</h2>" // Title that will be displayed above the Purchase Mineral button
    // for (const stateObj of state) { // iterate through the transientState array
    // produced from the facilityMinerals module
        html += `<option id ="Space Cart" value="${facChoice}">${minerals.name}</option>`
    // }
    html += "</select>"

    return html
    }

    