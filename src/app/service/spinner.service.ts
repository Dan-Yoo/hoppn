import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SpinnerService {
    private showSpinner = new BehaviorSubject(false);
    showSpinner$ = this.showSpinner.asObservable();

    constructor() { }

    startSpinner() {
        this.showSpinner.next(true);
    }

    stopSpinner() {
        this.showSpinner.next(false);
    }
}
