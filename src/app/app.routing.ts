import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { ColorDetailComponent } from './components/color-detail/color-detail.component';
import { ColorListComponent } from './components/color-list/color-list.component';


import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';

const appRoutes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'logout/:sure', component: LoginComponent},
    {path: 'registro', component: RegisterComponent},
    {path: 'inicio', component: ColorListComponent},
    {path: 'entrada/:id', component: ColorDetailComponent},
    {path: '**', component: LoginComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
