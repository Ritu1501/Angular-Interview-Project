import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtmComponent } from './atm/atm.component';
import { Page1Component } from './page1/page1.component';

const routes: Routes = [
  { path: 'atm', component: AtmComponent},
  { path: 'shopping', component: Page1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
