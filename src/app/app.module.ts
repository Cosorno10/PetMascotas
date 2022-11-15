import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './core/modules/material.module';
import { PetGridComponent } from './components/molecules/pet-grid/pet-grid.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from './core/config/interceptor';
import { PetService } from './services/pet.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './components/atoms/table/table.component';
import { SalesComponent } from './components/molecules/sales/sales.component';
import { LoginComponent } from './components/molecules/login/login.component';
import { DashboardComponent } from './components/molecules/dashboard/dashboard.component';
import { DialogComponent } from './components/atoms/dialog/dialog.component';
import { BuyerComponent } from './components/molecules/buyer/buyer.component';
import { UserComponent } from './components/molecules/user/user.component';
import { PetComponent } from './components/molecules/pet/pet.component';

@NgModule({
  declarations: [
    AppComponent,
    PetGridComponent,
    TableComponent,
    SalesComponent,
    LoginComponent,
    DashboardComponent,
    DialogComponent,
    BuyerComponent,
    UserComponent,
    PetComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    MaterialModule
  ],
  providers: [
    PetService,
    {
        provide : HTTP_INTERCEPTORS,
        useClass: Interceptor,
        multi   : true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
