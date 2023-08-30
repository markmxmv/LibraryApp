import { DivComponent } from "../../common/div-component";
import './search.css'

export class Search extends DivComponent {
    constructor(state) {
        super();
        this.state = state;
    }

    search() {
        const value = this.el.querySelector('input').value;
        this.state.searchQuery = value;
    }

    render() {
        this.el.classList.add('search');
        this.el.innerHTML = `
            <div class="search__wrapper">
                <input value="${this.state.searchQuery ? this.state.searchQuery : ''}" type="text" placeholder="Find book or author..." class="search__input" />
                <img class="search__input__image" src="./static/search.svg" alt="search input image"/>
                <button aria-label="Search" class="search__button">
                    <img src="./static/search-white.svg"/>
                </button>
                
            </div>
        `;
        this.el.querySelector('button').addEventListener('click', this.search.bind(this));
        this.el.querySelector('input').addEventListener('keydown', (e) => {
            if(e.code == 'Enter') {
                this.search();
            } return
        })
        return this.el;
    }
}
