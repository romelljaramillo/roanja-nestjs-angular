import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { Nofound404Component } from './pages/nofound404/nofound404.component';

const childRoutes: Routes = [
  { path: '', component: LayoutComponent },
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: '**', component: Nofound404Component },
]

@NgModule({
  imports: [ 
    RouterModule.forChild(childRoutes)
  ],
  exports: [ RouterModule ]
})
export class TemplateRoutingModule { }
