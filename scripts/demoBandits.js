//
import { colonyChoices } from "./colonies.js"
import { facilityChoices } from "./facilities.js"
import { governorList } from "./governors.js"

import { chooseFMinerals } from "./facilityMineral.js"
import {  } from "./purchasedMinerals.js"

import { chooseMinerals } from "./Minerals.js"
import { mineralSelection } from "./purchasedMinerals.js"
import { addPurchasedMinerals } from "./database.js"


// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "governor") {
//             colonyChoices()
//         }
//     }
// )

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addPurchasedMinerals()}
    })

export const demoBandits = () => {
    return `
        <center><h1>Demo Bandits Space Shop</h1></center>
            
        <div><fieldset class="fieldset-auto-width">
        <legend><h2>Choose Your Mineral</h2></legend>
    
        <article class="dropdownMenus">
            <section id="governor">
                ${governorList()}
            </section>
            <section id="facilities">
                ${facilityChoices()}
            </section>
        </article>
    
        <article class="radioMinerals">
            <section id="mineral">
                <h2>Facility Minerals</h2>
                ${chooseFMinerals()}
            </section>
        </article></fieldset>

        <div><fieldset class="fieldset-set-right">
        <legend><h2>Purchase Your Mineral</h2></legend>
            <article class="colonies">
            <section>
                <h2>Colonies</h2>
                ${colonyChoices()}
            </section></article>

        <article class="cart">
            <section>
                <h2>Space Cart</h2>
                    ${mineralSelection()}
                <button id="orderButton">Purchase Minerals</button>
            </section>
        </article></fieldset></div>



    `
}