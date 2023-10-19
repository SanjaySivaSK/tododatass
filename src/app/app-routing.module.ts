import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './components/intro/intro.component'; 
import { DatasComponent } from './compontents/datas/datas.component';

const routes: Routes = [
  {path:"",component:IntroComponent},
  {path:"todo",component:DatasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
