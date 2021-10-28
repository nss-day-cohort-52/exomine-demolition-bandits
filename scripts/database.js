//* Facilities arrays and properties 

const database = {
    facilities: [
        { id: 1, name: "Hostess", status: true, colonyId: 1 },
        { id: 2, name: "Little Debbie", status: false, colonyId: 2 },
        { id: 3, name: "Sara Lee", status: true, colonyId: 3 },
        { id: 4, name: "Entenmann's", status: false, colonyId: 1 },
        { id: 5, name: "Mini Muffin", status: false, colonyId: 2 },
        { id: 6, name: "Chicken Pot Pie", status: false, colonyId: 3 }
    ],
    facilityMinerals: [
        { id: 1, amount: 10000, mineralId: 1, facilityId: 1 },
        { id: 2, amount: 12000, mineralId: 2, facilityId: 2 },
        { id: 3, amount: 8000, mineralId: 3, facilityId: 3 },
        { id: 4, amount: 15000, mineralId: 4, facilityId: 4 },
        { id: 5, amount: 13000, mineralId: 5, facilityId: 5 },
        { id: 6, amount: 5000, mineralId: 6, facilityId: 6 },
        { id: 7, amount: 1500, mineralId: 7, facilityId: 1 },
        { id: 8, amount: 1800, mineralId: 8, facilityId: 2 },
        { id: 9, amount: 27500, mineralId: 9, facilityId: 3 },
        { id: 10, amount: 100000, mineralId: 10, facilityId: 4 },
        { id: 11, amount: 22000, mineralId: 6, facilityId: 5 },
        { id: 12, amount: 500, mineralId: 8, facilityId: 6 }
    ],
    governors: [
        { id: 1, name: "Ding-Dong", colonyId: 1, },
        { id: 2, name: "Twinkie", colonyId: 2, },
        { id: 3, name: "Nutter-Butter", colonyId: 3, },
        { id: 4, name: "Snowball", colonyId: 3, },
        { id: 5, name: "Ho-Hos", colonyId: 1, },
        { id: 6, name: "Cosmic-Brownies", colonyId: 2, }
    ],
    colonies: [
        { id: 1, name: "Tatooine" },
        { id: 2, name: "Death Star" },
        { id: 3, name: "Dagobah" },
    ],
    minerals: [
        { id: 1, type: "Gold" },
        { id: 2, type: "Silver" },
        { id: 3, type: "Mercury" },
        { id: 4, type: "Hermatite" },
        { id: 5, type: "Goethite" },
        { id: 6, type: "Pyrite" },
        { id: 7, type: "Galena" },
        { id: 8, type: "Sphalerite" },
        { id: 9, type: "Baryte" },
        { id: 10, type: "Quartz" }
    ],
    purchasedMinerals: [
        { id: 1, colonyId: 1, mineralId: 1, facilityId: 1, governorId: 2, amountPurchased: 1 }
    ],
    transientState: { },
}

export const getFacilities = () => {
    return database.facilities.map(facility => ({ ...facility }))
}


export const getFacilityMinerals = () => {
    return database.facilityMinerals.map(fMineral => ({ ...fMineral }))
}


export const getGovernors = () => {
    return database.governors.map(governor => ({ ...governor }))
}


export const getColonies = () => {
    return database.colonies.map(colony => ({ ...colony }))
}


export const getMinerals = () => {
    return database.minerals.map(mineral => ({ ...mineral }))
}

export const getTransState = () => {
    return { ...database.transientState }
}

export const setFacilities = (id) => {
    database.transientState.facilityId = id
    
}


export const setGovernors = (id) => {
    database.transientState.governorId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}


export const setMinerals = (id) => {
    database.transientState.mineralId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setColonies = (id) => {
    database.transientState.colonyId = id
}

// export const setFacility = (facilityId) => {
//     database.transientState.selectedFacility = facilityId
//     document.dispatchEvent(new CustomEvent("stateChanged"))
// }

// export const purchaseMineral = () => {

//         // Broadcast custom event to entire documement so that the
//         // application can re-render and update state
//         document.dispatchEvent( new CustomEvent("stateChanged") )
//     }
// }









