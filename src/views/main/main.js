import { AbstractView } from "../../common/view.js";
import onChange from "on-change";
import { Header } from "../../components/header/header.js";
import { Search } from "../../components/search/search.js";

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

    }

    appStateHoook(path) {
        console.log(path)
    }

    render() {
        const main = document.createElement('div');
        main.append(new Search(this.state).render());
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