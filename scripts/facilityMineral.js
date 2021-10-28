//* Import provides access to facilityMineral array data from the database module

import { getFacilityMinerals, getMinerals, getFacilities, getTransState, setMinerals } from "./database.js";

const mineral = getMinerals()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "mineral") {
            setMinerals(parseInt(event.target.value))
        }
    }
)

export const facilityChoices = () => {

    const getFacilityMineral = getFacilityMinerals()

    const getMineral = getMinerals()

    const state = getTransState()

    const foundMineralObj = getMineral.find(
        (mineralObj) => {
           return mineralObj.type === state.mineralType
        }
 
    )
    for (let facilityMineral of getFacilityMineral) {
        if (foundMineralObj && facilityMineral.id == foundMineralObj.type) {
            return `${mineral.type}`
        } 
        
    }
}