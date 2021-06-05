import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders} from './app.routing';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';

import {NgxPaginationModule} from 'ngx-pagination';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { ColorDetailComponent } from './components/color-detail/color-detail.component';
import { ColorNewComponent } from './components/color-new/color-new.component';
import { ColorEditComponent } from './components/color-edit/color-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ColorListComponent,
    ColorDetailComponent,
    ColorNewComponent,
    ColorEditComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,

  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
