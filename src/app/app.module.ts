import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { DirectivesComponent } from './pages/directives/directives.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PipesComponent } from './pages/pipes/pipes.component';
import { RainbowPipe } from './utils/pipes/rainbow.pipe';
import {registerLocaleData} from "@angular/common";
import localeFr from '@angular/common/locales/fr';
import { OrderPipe } from './utils/pipes/order.pipe';
import { CommunicationComponent } from './pages/communication/communication.component';
import { EnfantComponent } from './components/enfant/enfant.component';
import { AboutServiceComponent } from './pages/about-service/about-service.component';
import { AboutServiceBisComponent } from './pages/about-service-bis/about-service-bis.component';
import { FormulairesComponent } from './pages/formulaires/formulaires.component';
import { RappelsComponent } from './pages/rappels/rappels.component';
import { ObservablesComponent } from './pages/observables/observables.component';
import {HttpClientModule} from "@angular/common/http";
import { RequestsComponent } from './pages/requests/requests.component';
import { RxComponent } from './pages/rx/rx.component';
import { LoginComponent } from './pages/login/login.component';
import { ObservablesLeRetourComponent } from './pages/observables-le-retour/observables-le-retour.component';




registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    DirectivesComponent,
    NotfoundComponent,
    NavigationComponent,
    PipesComponent,
    RainbowPipe,
    OrderPipe,
    CommunicationComponent,
    EnfantComponent,
    AboutServiceComponent,
    AboutServiceBisComponent,
    FormulairesComponent,
    RappelsComponent,
    ObservablesComponent,
    RequestsComponent,
    RxComponent,
    LoginComponent,
    ObservablesLeRetourComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [{provide: LOCALE_ID, useValue: 'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
