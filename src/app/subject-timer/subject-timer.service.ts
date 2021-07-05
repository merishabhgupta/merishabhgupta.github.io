import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SubjectTimerService {

    timerFired = new Subject<number>();

    timeStampEvent = new Subject<{stamp: Date, status: string}>();

    trackClick = new Subject<string>();

}