import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { DirectivesComponent } from './pages/directives/directives.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import {FormsModule} from "@angular/forms";
import { PipesComponent } from './pages/pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    DirectivesComponent,
    NotfoundComponent,
    NavigationComponent,
    PipesComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
