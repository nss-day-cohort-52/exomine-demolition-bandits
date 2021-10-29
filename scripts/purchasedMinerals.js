import { getMinerals, getTransState, addPurchasedMinerals, getFacilities } from "./database.js"

document.addEventListener(  // event listener that listens on DOM
    "click", // event type is click for when the user clicks on the Purchase Mineral button
    (changeEvent) => { // function parameter whose valur is the result of the if statement
        if (changeEvent.target.id === "Space Cart") { // comparision statement that checks if the clicked item is equal to the straing "Purchase Mineral"
            addPurchasedMinerals(parseInt(event.target.value))
        }
    }
)

export const mineralSelection = () => { // defining an export function that will get the state of the mineral choices 

    const state = getTransState()

    const mineralArray = getMinerals()

    const facilityArray = getFacilities()

    const mineralObj = mineralArray.find(
        (mineralObject) => {
            return mineralObject.type
        }
    )

    const facilityObj = facilityArray.find(
        (facilityObject) => {
            return facilityObject.name
        }
    )

    let html = "" // Title that will be displayed above the Purchase Mineral button

    if (state.selectedFacility) {

        html += `<div>
        
        1 ton of ${mineralObj.type} from ${facilityObj.name}     
        
        </div>` // one ton of mineral name from whichever facility

    }


    // for (const stateObj of state) { // iterate through the transientState array
    //     html += `<option value="${stateObj.id}">${minerals.name}</option>`
    // }
    // html += "</select>"

    return html
}