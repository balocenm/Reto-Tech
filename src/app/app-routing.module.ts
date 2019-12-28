import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './businness/components/home/home.component';
import { ClientComponent } from './businness/components/client/client.component';
import { ClientListComponent } from './businness/components/client-list/client-list.component';
import { ClientProjectionComponent } from './businness/components/client-projection/client-projection.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clients', component: ClientComponent },
  { path: 'client-list', component: ClientListComponent},
  { path: 'client-projection', component: ClientProjectionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
