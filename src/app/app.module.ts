import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './businness/components/home/home.component';
import { UserComponent } from './businness/components/user/user.component';
import { SummaryComponent } from './businness/components/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SummaryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
