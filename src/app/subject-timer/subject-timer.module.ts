import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

import { SubjectTimerComponent } from "./subject-timer.component";
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { SetTimerComponent } from './set-timer/set-timer.component';
import { TimeStampsComponent } from './time-stamps/time-stamps.component';
import { StartPauseCounterComponent } from './start-pause-counter/start-pause-counter.component';

const routes: Routes = [
    { path: '', component: SubjectTimerComponent } 
]
@NgModule({
    declarations: [
        SubjectTimerComponent,
        CountdownTimerComponent,
        SetTimerComponent,
        TimeStampsComponent,
        StartPauseCounterComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ]
})
export class SubjectTimerModule {

}