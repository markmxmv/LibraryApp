import { AbstractView } from "../../common/view.js";
import onChange from "on-change";
import { Header } from "../../components/header/header.js";
import { Search } from "../../components/search/search.js";
import { CardList } from "../../components/cardlist/cardlist.js";

export class MainView extends AbstractView {
    state = {
        list: [],
        loading: false,
        searchQuery: undefined,
        offset: 0
    }

    constructor(appState) {
        super();
        this.setTitle('Library App');
        this.appState = appState;
        this.appState = onChange(this.appState, this.appStateHoook.bind(this));
        this.state = onChange(this.state, this.stateHoook.bind(this));

    }

    appStateHoook(path) {
        if (path === 'favorites') {
            console.log(path)
        }

    }

    async stateHoook(path) {
        if (path === 'searchQuery') {
            this.state.loading = true;
            const data = await this.loadList(this.state.searchQuery, this.state.offset);
            this.state.loading = false;
            console.log(data);
            this.state.list = data.docs;
            console.log(this.state.list)
        }
    }

    async loadList(q, offset) {
        const res = await fetch(`https://openlibrary.org/search.json?q=${q}&offset=${offset}`);
        return res.json()
    }

    render() {
        const main = document.createElement('div');
        main.append(new Search(this.state).render());
        main.append(new CardList(this.state).render())
        this.app.innerHTML = '';
        this.app.append(main);
        this.renderHeader();
		this.appState.favorites.push('d');
    }

    renderHeader() {
        const header = new Header(this.appState).render();
        this.app.prepend(header)
        
    }

}