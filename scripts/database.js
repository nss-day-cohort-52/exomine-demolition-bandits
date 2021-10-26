//* Facilities arrays and properties 

const database = {
    transientState: {},
    facilities: [
        {id: 1, name: "Hostess", status: true, colonyId: 1 },
        {id: 2, name: "Little Debbie", status: false, colonyId: 2 },
        {id: 3, name: "Sara Lee", status: true, colonyId: 3 },
        {id: 4, name: "Entenmann's", status: false, colonyId: 1 },
        {id: 5, name: "Mini Muffin", status: false, colonyId: 2 },
        {id: 6, name: "Chicken Pot Pie", status: false, colonyId: 3 }
    ],
    facilityMineral: [
        {id: 1, amount: 10000, mineralId: 1, facilityId: 1},
        {id: 2, amount: 12000, mineralId: 2, facilityId: 2},
        {id: 3, amount: 8000, mineralId: 3, facilityId: 3},
        {id: 4, amount: 15000, mineralId: 4, facilityId: 4},
        {id: 5, amount: 13000, mineralId: 5, facilityId: 5},
        {id: 6, amount: 5000, mineralId: 6, facilityId: 6},
        {id: 7, amount: 1500, mineralId: 7, facilityId: 1},
        {id: 8, amount: 1800, mineralId: 8, facilityId: 2},
        {id: 9, amount: 27500, mineralId: 9, facilityId: 3},
        {id: 10, amount: 100000, mineralId: 10, facilityId: 4},
        {id: 11, amount: 22000, mineralId: 11, facilityId: 5},
        {id: 12, amount: 500, mineralId: 12, facilityId: 6}
    ],
}

// export const setFacility = (facilityId) => {
//     database.transientState.selectedFacility = facilityId
//     document.dispatchEvent( new CustomEvent("stateChanged") )
// }

//* Export allows access to facilities array from other modules.

export const getFacilities = () => {
    return database.facilities.map(fecility => ({...fecility}))
}

//* Export allows access to facilityMineral array from other modules.

export const getFacilityMineral = () => {
    return database.facilityMineral.map(fMineral => ({...fMineral}))
}

// export const purchaseMineral = () => {

//         // Broadcast custom event to entire documement so that the
//         // application can re-render and update state
//         document.dispatchEvent( new CustomEvent("stateChanged") )
//     }
// }
