//* Import provides access to facilities array data from the database module

import { getFacilities, setFacilities } from "./database.js";

const facilities = getFacilities()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "facility") {
            setFacilities(parseInt(event.target.value))
        }
    }
)

export const facilityChoices = () => {
    let html = "<h2>Choose a facility</h2>"

    html += `<select id="facilities">`
    html += `<option value="0">Select A Facility...</option>`

    for (const facility of facilities) {
        html += `<option value="${facility.id}">${facility.name}</option>`
    }
    html += "</select>"

    return html
}