//
import {} from "./colonies.js"
import {} from "./facilities.js"
import {} from "./governors.js"
import {} from "./facilityMineral.js"
import {} from "./purchasedMinerals.js"
import {} from "./Minerals.js"


export const demoBandits = () => {
    return `
        <h1>Demo Bandits Space Shop</h1>
            
        <article class="dropdownMenus">
            <section>
                <h2>Choose a Governor</h2>
                $ {}
            </section>
            <section>
                <h2>Choose a Colony</h2>
                $ {}
            </section>
        </article>

        <article class="minerals">
            <section>
                <h2>Minerals</h2>
                $ {}
            </section>
        </article>

        <article class="radioMinerals>
            <section>
                <h2>Facility Minerals</h2>
                $ {}
            </section>
        </article>

        <article class="cart">
            <section>
                <h2>Cart</h2>
                $ {}
            </section>
        </acticle>



    `
}