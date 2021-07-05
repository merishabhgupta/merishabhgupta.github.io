import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

import { DynamicTableComponent } from "./dynamic-table.component";
import { SortDirective } from './sort.directive';

@NgModule({
    declarations:[
        DynamicTableComponent,
        SortDirective
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([{ path: '', component: DynamicTableComponent }])
    ]
})
export class DynamicTableModule {

}