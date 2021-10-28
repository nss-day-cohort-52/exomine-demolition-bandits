import { getMinerals } from "./database.js"

document.addEventListener(
    "click",
    (changeEvent) => {
        if (changeEvent.target.id === "Purchase Mineral") {
            
            
        }
    }
)
const minerals = getMinerals()

export const mineralSelection = () => {
    let html = "<h2>Space Cart</h2>"



    for (const mineral of minerals) {
        html += `<option value="${governor.id}">${governor.name}</option>`
    }
    html += "</select>"

    return html
}