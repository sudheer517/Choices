import { Component } from '@angular/core';
import { GlobalState } from '../../global.state';

@Component({
    selector: 'app',
    template: require('./app.component.html'),
    styles: [require('./app.component.scss')]
})
export class AppComponent {
    isMenuCollapsed: boolean = false;

    constructor(private _state: GlobalState) {
        this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
            this.isMenuCollapsed = isCollapsed;
        });
    }
}
