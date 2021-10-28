import { demoBandits } from "./demoBandits.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
   mainContainer.innerHTML = demoBandits()
}

renderAllHTML()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})