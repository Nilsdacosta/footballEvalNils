import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { HomepageComponent } from './homepage/homepage.component';
import {RouterModule} from "@angular/router";
import { AddJoueurComponent } from './add-joueur/add-joueur.component';
import { DetailJoueurComponent } from './detail-joueur/detail-joueur.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AddJoueurComponent,
    DetailJoueurComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
