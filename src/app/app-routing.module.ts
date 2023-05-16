import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NgforComponent } from './components/ngfor/ngfor.component';
import { NgifComponent } from './components/ngif/ngif.component';
import { NgmodelComponent } from './components/ngmodel/ngmodel.component';
import { ParentComponent } from './components/inputs/parent/parent.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'ngfor', component: NgforComponent},
  {path: 'ngif', component: NgifComponent},
  {path: 'ngmodel', component: NgmodelComponent},
  {path: 'input', component: ParentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
