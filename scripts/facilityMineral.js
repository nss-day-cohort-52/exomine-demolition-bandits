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

    const facilityMineralArray = getFacilityMinerals()

    const mineralArray = getMinerals()

    const state = getTransState()



    const filteredFacilityMineralArray = facilityMineralArray.filter(   // creating a new array by filtering through ficilityMineralArray
        (facilityMineralObj) => {                                       // the paramater (facilityMineralObj) stores a single object from facilityMineralArray
            return state.facilityId === facilityMineralObj.facilityId    // returns object or objects into an array if the return value is true
        }

    )

    // 0: {id: 2, amount: 12000, mineralId: 2, facilityId: 2}
    // 1: {id: 8, amount: 1800, mineralId: 8, facilityId: 2}

    let html = ""   // declaring a variable  html and assigning to it the value of string to th ul element
    const mappedFacilityMineralArray = filteredFacilityMineralArray.map(
        (facilityMineralObj) => {

            const foundMineralObj = mineralArray.find(      // get mineral object that matches mineralId (.find)
                (mineralObj) => {
                    return mineralObj.id === facilityMineralObj.mineralId   // return mineral object
                }
            )
            return `<div>
            <input selected type="radio" name="mineral" value="${foundMineralObj.id}"/>${foundMineralObj.amount} tons of ${foundMineralObj.type}       
            </div>`
        })
        html += mappedFacilityMineralArray.join("")
        
        
        
    return html

}