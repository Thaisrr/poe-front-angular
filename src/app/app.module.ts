import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { DirectivesComponent } from './pages/directives/directives.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import {FormsModule} from "@angular/forms";
import { PipesComponent } from './pages/pipes/pipes.component';
import { RainbowPipe } from './utils/pipes/rainbow.pipe';
import {registerLocaleData} from "@angular/common";
import localeFr from '@angular/common/locales/fr';
import { OrderPipe } from './utils/pipes/order.pipe';
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
    OrderPipe
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [{provide: LOCALE_ID, useValue: 'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
