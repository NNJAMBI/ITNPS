import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ResponsesComponent } from './responses/responses.component';

@NgModule({
  declarations: [
   
  ResponsesComponent,
],


  imports: [
    BrowserModule,
    AppRoutingModule,
    
=======
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TnpsTrendsComponent } from './tnps-trends/tnps-trends.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ReportsComponent } from './reports/reports.component';
import { ResponsesComponent } from './responses/responses.component';
import { HelpComponent } from './help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DashboardComponent,
    TnpsTrendsComponent,
    NavBarComponent,
    SideBarComponent,
    ReportsComponent,
    ResponsesComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
>>>>>>> origin
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
