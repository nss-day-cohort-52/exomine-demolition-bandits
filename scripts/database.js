const database = {
colony-database
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
        
    


minerals: [
    { id: 1, type: "gold", },
    { id: 2, type: "silver", },
    { id: 3, type: "mercury", },
    { id: 4, type: "hermatite", },
    { id: 5, type: "goethite", },
    { id: 6, type: "pyrite", },
    { id: 7, type: "galena", }, 
    { id: 8, type: "sphalerite", }, 
    { id: 9, type: "baryte", }, 
    { id: 10, type: "quartz", }, 
],

}

purchasedMinerals: [
    {id: 1, conlonyId: 1, mineralId: 1, amountPurchased: 1 }
]


    transientState: {}


export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const getFacilities = () => {
    return database.facilities.map(f => ({ ...f }))
}

export const purchaseMineral = () => {

 colony-database
    // Broadcast custom event to entire documement so that the
    // application can re-render and update state
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
    }


