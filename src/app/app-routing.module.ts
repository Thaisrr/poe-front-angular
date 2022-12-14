import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PresentationComponent} from "./pages/presentation/presentation.component";
import {DirectivesComponent} from "./pages/directives/directives.component";
import {NotfoundComponent} from "./pages/notfound/notfound.component";
import {PipesComponent} from "./pages/pipes/pipes.component";
import {CommunicationComponent} from "./pages/communication/communication.component";
import {AboutServiceComponent} from "./pages/about-service/about-service.component";
import {AboutServiceBisComponent} from "./pages/about-service-bis/about-service-bis.component";
import {FormulairesComponent} from "./pages/formulaires/formulaires.component";
import {RappelsComponent} from "./pages/rappels/rappels.component";
import {ObservablesComponent} from "./pages/observables/observables.component";
import {RequestsComponent} from "./pages/requests/requests.component";
import {RxComponent} from "./pages/rx/rx.component";
import {LoginComponent} from "./pages/login/login.component";
import {ObservablesLeRetourComponent} from "./pages/observables-le-retour/observables-le-retour.component";
import {AdminComponent} from "./pages/admin/admin.component";
import {AuthGuard} from "./utils/guards/auth.guard";
import {ProfileComponent} from "./pages/profile/profile.component";

const routes: Routes = [
  {path: '', component: PresentationComponent},
  {path: 'directives', component: DirectivesComponent},
  {path:'pipes', component: PipesComponent},
  {path: 'communication', component: CommunicationComponent},
  {path: 'services', component: AboutServiceComponent},
  {path: 'services2', component: AboutServiceBisComponent},
  {path: 'formulaires', component: FormulairesComponent},
  {path: 'toto', component: RappelsComponent},
  {path: 'rxjs', component: RxComponent, children: [
      {path: 'obs', component: ObservablesComponent},
      {path: 'req/:id', component: RequestsComponent},
      {path: 'req', component: RequestsComponent},
      {path: 'obs-bis', component: ObservablesLeRetourComponent},
    ]},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'accueil', redirectTo: ''},
  {path: 'acceuil', redirectTo: '' },
  {path: '**', component: NotfoundComponent}, // se met en dernier
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
