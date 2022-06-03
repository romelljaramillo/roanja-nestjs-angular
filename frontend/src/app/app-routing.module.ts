import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthRoutingModule } from './modules/auth/auth.routing.module';
import { Nofound404Component } from './template/pages/nofound404/nofound404.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./template/template.module').then( m => m.TemplateModule)
  },
  { path: '**', component: Nofound404Component },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
