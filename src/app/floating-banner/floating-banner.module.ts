import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FloatingBannerComponent } from "./floating-banner.component";

const routes: Routes = [
    { path:'', component: FloatingBannerComponent }
]
@NgModule({
    declarations: [
        FloatingBannerComponent
    ],
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class FloatingBannerModule {
    
}