import { getMinerals, setMinerals } from './database.js'


const minerals = getMinerals()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "mineral"){
            setMinerals(changeEvent.target.value)

        }
    }
)




export const Minerals = () => {
    let html = '<ul>'
    const mineralList = minerals.map(mineralObj => {
        return `<li>
        <input type='radio' name='mineral value='${mineralObj.id}'/> ${mineralObj.type}
        </li>`
    })
    html += mineralList.join('')
    html += '</ul>'
    return html
}