import { getMinerals,  } from './database.js'


const minerals = getMinerals() // declare a const variabel and assign to it the value of the getMinerals() function

document.addEventListener( //event listener declaration function
    "change", // type of event lister is 'change'
    (changeEvent) => { // function parameter that is used as the target event placeholder
        if (changeEvent.target.name === "minerals") { // condition if statement that checks if the target.name in the export function truthy
            setMinerals(changeEvent.target.value) // invokes the setMinerals function with the change event as an argument

        }
    }
)




export const chooseMinerals = () => { // declare and export the Minerals function
    let html = "<ul>" // declare a variable html and assign to it the value of an unordered list
    const mineralList = minerals.map(mineralObj => { // declare a variable mineralList and assign to it the value of the itterated array of minerals
        return `<li> 
        <input type='radio' name='minerals' value='${mineralObj.id}'/> ${mineralObj.type}
        </li>`
    })  //line 22-24 returns a list item of an input tag with the parameters of type, name, and value that will create the radio buttons in the DOM 
    html += mineralList.join("") // here the entire value of the mineralList variable is being joined into one complete string and assigned to the html variable
    html += "</ul>" // closing tag for the html let variable
    return html // returning the html variable
}