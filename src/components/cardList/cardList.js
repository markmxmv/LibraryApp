import { DivComponent } from "../../common/div-component";
import { Card } from "../card/card";
import './cardList.css'

export class CardList extends DivComponent {
    constructor(appState, parentState) {
        super();
        this.appState = appState;
        this.parentState = parentState;
    }

    render() {
        if (this.parentState.loading === true) {
            this.el.innerHTML = `
                <div class="card_list__loader">Loading...</div>
            `;
            return this.el;
        }
        this.el.classList.add('card_list');
        const cardFlex = document.createElement('div');
		cardFlex.classList.add('cards');
		this.el.append(cardFlex);
        for(const card of this.parentState.list) {
            this.el.querySelector('.cards').append(new Card(this.appState, card).render())
        }
        return this.el;
    }
}