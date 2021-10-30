//* Import provides access to facilityMineral array data from the database module

import { getFacilityMinerals, getMinerals, setFacilityMinerals, getTransState, setMinerals } from "./database.js";

const mineral = getMinerals()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "mineral") {
            setFacilityMinerals(parseInt(event.target.value))
        }
    }
)

export const chooseFMinerals = () => {

    const getFacilityMineral = getFacilityMinerals()

    const getMineral = getMinerals()

    const state = getTransState()

    const foundMineralObj = getMineral.find(
        (mineralObj) => {
           return mineralObj.id === state.mineralId
        }
 
    )
    for (let facilityMineral of getFacilityMineral) {
        if (foundMineralObj && facilityMineral.id == foundMineralObj.id) {
            return `${mineral.type}`
        } 
        
    }
}