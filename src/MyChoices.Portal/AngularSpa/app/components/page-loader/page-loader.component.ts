import { Component } from '@angular/core';

@Component({
    selector: "mc-page-loader",
    template: require('./page-loader.component.html')
})
export class PageLoader {
    private _element: HTMLElement;
    private _selector: "mc-page-loader";

    constructor() {
        this._element = document.getElementById(this._selector);
    }

    public show(): void {
        this._element.style.display = 'block';
    }

    public hide(delay: number = 0): void {
        setTimeout(() => {
            this._element.style.display = 'none';
        }, delay);
    }
}

