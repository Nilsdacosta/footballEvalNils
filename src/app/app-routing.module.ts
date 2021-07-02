import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {AddJoueurComponent} from "./add-joueur/add-joueur.component";
import {DetailJoueurComponent} from "./detail-joueur/detail-joueur.component";

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'joueur/add', component: AddJoueurComponent},
  {path: 'joueur/:id', component: DetailJoueurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
