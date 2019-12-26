import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './businness/components/home/home.component';
import { ClientComponent } from './businness/components/client/client.component';
import { SummaryComponent } from './businness/components/summary/summary.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { DataDbService } from './businness/service/data-db.service';


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    SummaryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,
  ],
  providers: [ DataDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
