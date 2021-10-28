// imports the array governors from the database
import { getGovernors, setGovernors, getTransState } from "./database.js"
import { colonyChoices } from "./colonies.js"
// State variable (copy of the data)
const governors = getGovernors()
const state = getTransState()
document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "governors") {
            setGovernors(parseInt(event.target.value))
        }
    }
)


export const governorList = () => {
    let html = "<h2>Choose a governors</h2>"
    html += `<select id="governors">`
    
    html += `<option value="0">Select A Governor...</option>`

    for (const governor of governors) {
        html += `<option value="${governor.id}">${governor.name}</option>`
    }
    html += "</select>"

    return html
}