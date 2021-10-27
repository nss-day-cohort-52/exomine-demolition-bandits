//
import { colonyChoices } from "./colonies.js"
import { facilityChoices } from "./facilities.js"
import { governorChoices } from "./governors.js"
import {  } from "./facilityMineral.js"
import {  } from "./purchasedMinerals.js"
import { chooseMinerals } from "./Minerals.js"


export const demoBandits = () => {
    return `
        <h1>Demo Bandits Space Shop</h1>
            
        <fieldset>
        <legend>Mine Your Mineral</legend>
    
        <article class="dropdownMenus">
            <section>
                ${governorChoices()}
            </section>
            <section>
                ${facilityChoices()}
            </section>
        </article>

        <article class="minerals">
            <section>
                <h2>Minerals</h2>
                ${chooseMinerals()}
            </section>
        </article>

        <article class="radioMinerals>
            <section>
                <h2>Facility Minerals</h2>
                $ {}
            </section>
        </article></fieldset>

        <article class="colonies">
            <section>
                <h2>Colonies</h2>
                ${colonyChoices()}
            </section></article>

        <article class="cart">
            <section>
                <h2>Cart</h2>
                $ {}
            </section>
        </acticle>



    `
}