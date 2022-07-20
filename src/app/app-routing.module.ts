import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {KazComponent} from "./kaz/kaz.component";
import {MexicoComponent} from "./mexico/mexico.component";
import {FranceComponent} from "./france/france.component";
import {FirstComponent} from "./first/first.component";


const routes: Routes = [
  {path:'', component:FirstComponent},
  {path:'kaz', component:KazComponent},
  {path:'france', component:FranceComponent},
  {path:'mexico', component:MexicoComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
