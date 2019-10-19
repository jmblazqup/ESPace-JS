import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NivelMarComponent } from './content/nivel-mar/nivel-mar.component';

const routes: Routes = [
 {path: 'nivel-del-mar', component: NivelMarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
