import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

import { DynamicDivsComponent } from "./dynamic-divs.component";

@NgModule({
    declarations: [
        DynamicDivsComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([{ path: '', component: DynamicDivsComponent }])
    ]
})
export class DynamicDivsModule {
}