import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PresentationComponent} from "./pages/presentation/presentation.component";
import {DirectivesComponent} from "./pages/directives/directives.component";
import {NotfoundComponent} from "./pages/notfound/notfound.component";

const routes: Routes = [
  {path: '', component: PresentationComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'accueil', redirectTo: ''},
  {path: 'acceuil', redirectTo: '' },
  {path: '**', component: NotfoundComponent}, // se met en dernier
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
