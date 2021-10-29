import { getMinerals, getTransState } from "./database.js"

document.addEventListener(  // event listener that listens on DOM
    "click", // event type is click for when the user clicks on the Purchase Mineral button
    (changeEvent) => { // function parameter whose valur is the result of the if statement
        if (changeEvent.target.id === "Space Cart") { // comparision statement that checks if the clicked item is equal to the straing "Purchase Mineral"
            const minSelect = mineralSelection()
            
        }
    }
)
const minerals = getMinerals() // storing the result of the getMinerals function, which is an Array in the minerals variable
const state = getTransState()

export const mineralSelection = () => { // defining an export function that will get the state of the mineral choices 
    let html = "<h2>Space Cart</h2>" // Title that will be displayed above the Purchase Mineral button

    

    // for (const stateObj of state) { // iterate through the transientState array
    //     html += `<option value="${stateObj.id}">${minerals.name}</option>`
    // }
    // html += "</select>"

    // return html
}