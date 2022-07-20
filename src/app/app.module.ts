import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { ButtonComponent } from './button/button.component';
import { DetailComponent } from './detail/detail.component';
import { KazComponent } from './kaz/kaz.component';
import { FranceComponent } from './france/france.component';
import { MexicoComponent } from './mexico/mexico.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ButtonComponent,
    DetailComponent,
    KazComponent,
    FranceComponent,
    MexicoComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
