//* Import provides access to facilities array data from the database module

import { getFacilities, setFacilities, getTransState } from "./database.js";

const facilities = getFacilities()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "facilities") {
            setFacilities(parseInt(event.target.value))
        }
    }
)

export const facilityChoices = () => {
    const state = getTransState()
    let html = "<h2>Facilities</h2>"

    html += `<select id="facilities" value="${state.facilityId}">`
    html += `<option value="0">Select A Facility...</option>`

    for (const facility of facilities) {
        html += `<option ${facility.id === state.facilityId ? "selected" : ""} value="${facility.id}">${facility.name}</option>`
    }
        html += "</select>"
    return html

}