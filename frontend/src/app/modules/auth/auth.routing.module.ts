import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthComponent } from './auth.component';


const routes: Routes = [
    { 
        path: 'login', 
        component: AuthComponent,
        loadChildren: () => import('./auth-child.routing.module').then( m => m.AuthChildRoutingModule )
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}