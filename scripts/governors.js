// imports the array governors from the database
import { getGovernors, setGovernors, getTransState } from "./database.js"

// State variable (copy of the data)
const governors = getGovernors()
document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "governors") {
            setGovernors(parseInt(event.target.value))
        }
    }

)



    

    
    
    export const governorList = () => {
        const state = getTransState()
        let html = "<h2>Choose a governors</h2>"
        
    html += `<select id="governors" value="${state.governorId}">`

    html += `<option value="0">Select A Governor...</option>`

        for (const governor of governors) {
    //     if(governor.id === state.governorId){
    //         html += `<option selected value="${governor.id}">${governor.name}</option>`       
    //     }else
    //     {
    //         html += `<option value="${governor.id}">${governor.name}</option>`
    //     }

 // ternary statement most concise version of if/else statement.
 // only if there is only one operation statement is true/false
        html += `<option ${governor.id === state.governorId ? "selected" : ""} value="${governor.id}">${governor.name}</option>`
    }
    
    html += "</select>"

    return html
}