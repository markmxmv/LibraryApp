import { DivComponent } from "../../common/div-component";
import './header.css'

export class Header extends DivComponent {
    constructor(appState) {
        super();
        this.appSate = appState;
    }

    render() {
        this.el.innerHTML = '';
        this.el.classList.add('header');
        this.el.innerHTML = `
            <div class="logo">
                <img src="./static/logo.svg" alt="logo" />
            </div>
            <div class="menu">
                <a class="menu__item" href="#">
                    <img src="./static/search.svg" alt="search image"/>
                    <span class="menu__item__search">Search</span>
                </a>
                <a class="menu__item" href="#">
                    <img src="./static/favorites.svg" alt="favorites image"/>
                    Favorites
                    <div class="menu__counter">
                        ${this.appSate.favorites.length}
                    </div>
                </a>
            </div>
        `;
        return this.el;
    }
}
