import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
// import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo:'/floating-banner', pathMatch: 'full'},
  { path: 'floating-banner', loadChildren: () => import('./floating-banner/floating-banner.module').then(m => m.FloatingBannerModule) },
  { path: 'e-commerce', loadChildren: () => import('./e-commerce/e-commerce.module').then(m => m.ECommerceModule) },
  { path: 'io-timer', loadChildren: () => import('./io-timer/io-timer.module').then(m => m.IoTimerModule) },
  { path: 'sub-timer', loadChildren: () => import('./subject-timer/subject-timer.module').then(m => m.SubjectTimerModule) },
  { path: 'dynamic-table', loadChildren: () => import('./dynamic-table/dynamic-table.module').then(m => m.DynamicTableModule) },
  { path: 'dynamic-divs', loadChildren: () => import('./dynamic-divs/dynamic-divs.module').then(m => m.DynamicDivsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      preloadingStrategy: PreloadAllModules
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
