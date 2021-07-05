import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

import { ECommerceComponent } from "./e-commerce.component";

import { ECommerceResolverService } from "./e-commerce-resolver.service";

@NgModule({
    declarations: [
        ECommerceComponent
    ],
    imports: [
        FormsModule,
        SharedModule,
        RouterModule.forChild([
            { 
                path: '', 
                component: ECommerceComponent,
                resolve: {
                    productData: ECommerceResolverService
                }
            }
        ])
    ]
})
export class ECommerceModule {

}