import { MainView } from "./views/main/main";

class App {
    routes = [
        { path: "", view: MainView }
    ];

    appState = {
        favorites: ['m']
    }

    constructor() {
        window.addEventListener('hashchange', this.route())
    }

    route() {
        const view = this.routes.find(r => r.path == location.hash).view;
        this.currentView = new view(this.appState);
        this.currentView.render();
    }

}

new App