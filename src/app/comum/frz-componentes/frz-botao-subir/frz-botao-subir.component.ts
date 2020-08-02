import { Component, OnInit, Inject, HostListener, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-frz-botao-subir',
    templateUrl: './frz-botao-subir.component.html',
    styleUrls: ['./frz-botao-subir.component.scss'],
})
export class FrzBotaoSubirComponent implements OnInit {

    windowScrolled: boolean;

    constructor(
        @Inject(DOCUMENT) private document: Document
    ) {
    }

    ngOnInit(): void {
    }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
            this.windowScrolled = true;
        } else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
            this.windowScrolled = false;
        }
    }

    scrollToTop() {
        (function smoothscroll() {
            const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - (currentScroll / 8));
            }
        })();
    }

}
