const database = {
    colonies: [
        {
            id: 1,
            name: "Tatooine",
        },
        {
            id: 2,
            name: "Death Star"
        },
        {
            id: 3,
            name: "Dagobah"
        },
        {
            id: 4,
            name: "Alderaan"
            
        },
        {
            id: 5,
            name: "Bespin"
        },
        {
            id: 6,
            name: "Endor"
        },
    ],
    transientState: {},
        
    
}

export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const getFacilities = () => {
    return database.facilities.map(f => ({ ...f }))
}

export const purchaseMineral = () => {

    // Broadcast custom event to entire documement so that the
    // application can re-render and update state
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

