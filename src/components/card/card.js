import { DivComponent } from "../../common/div-component";
import './card.css'

export class Card extends DivComponent {
    constructor(appState, cardState) {
        super();
        this.appState = appState;
        this.cardState = cardState;
    }

    #addToFavorites() {
        this.appState.favorites.push(this.cardState);
    }

    #deleteFromFavorites() {
        this.appState.favorites = this.appState.favorites.filter(b => b.key != this.cardState.key)
    }

    render() {
        this.el.classList.add('card');
        const existInFavorites = this.appState.favorites.find(
            b => b.key == this.cardState.key
        )
        this.el.innerHTML = `
            <div class="card__top">
                <img src="https://covers.openlibrary.org/b/olid/${this.cardState.cover_edition_key}-M.jpg" alt="cover" />
            </div>
            <div class="card__bottom">
                    <div class="info__wrapper">
                        <div class="card__info__genre">${this.cardState.subject ? this.cardState.subject[0] : 'Not found'}</div>
                        <div class="card__info__title">${this.cardState.title}</div>
                        <div class="card__info__author">${this.cardState.author_name ? this.cardState.author_name[0] : 'Not found'}</div>
                    </div>
                    <div class=" card__footer">
                        <button class="footer__button ${existInFavorites ? "footer__button_active" : ""}">
                        ${existInFavorites ? '<img class="button__image" src="./static/favorites.svg" alt="favorites"></img>' : '<img class="button__image" src="./static/favorites-white.svg" alt="favorites white" />'}
                        </button>
                    </div>
            </div>
        
        `
        if (existInFavorites) {
            this.el.querySelector('button').addEventListener('click', this.#deleteFromFavorites.bind(this));
            
        } else {
            this.el.querySelector('button').addEventListener('click', this.#addToFavorites.bind(this))
        }
        return this.el;
    }
}