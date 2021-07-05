import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

import { IoTimerComponent } from "./io-timer.component";
import { CountdownTimerComponent } from "./countdown-timer/countdown-timer.component";
import { SetTimerComponent } from './set-timer/set-timer.component';
import { TimeStampsComponent } from './time-stamps/time-stamps.component';
import { StartPauseCounterComponent } from './start-pause-counter/start-pause-counter.component';

const routes: Routes = [
    { path: '', component: IoTimerComponent }
]
@NgModule({
    declarations: [
        IoTimerComponent,
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
export class IoTimerModule {

}