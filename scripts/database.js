const database = {
 governors: [
        {id: 1, name: "Ding-Dong", colonyId: 1, },
        {id: 2, name: "Twinkie", colonyId: 2, },
        {id: 3, name: "Nutter-Butter", colonyId: 3, },
        {id: 4, name: "Snowball", colonyId: 3, },
        {id: 5, name: "ho-hos",colonyId: 1, },
        {id: 6, name: "Cosmic-Brownies", colonyId: 2, },
    ],
    transientState: {}
}

export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getFacilities = () => {
    return database.facilities.map(f => ({...f}))
}

export const purchaseMineral = () => {

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
    }
}

export const getGovernors = () => {
    return database.governors.map(governor => ({...governor}))
}