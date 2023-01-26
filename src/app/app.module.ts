import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewweatherdataComponent } from './viewweatherdata/viewweatherdata.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { ProductregisterComponent } from './admin/productregister/productregister.component';
import { ViewcomplaintsComponent } from './admin/viewcomplaints/viewcomplaints.component';
import { ViewuserComponent } from './admin/viewuser/viewuser.component';
import { ViewproductComponent } from './admin/viewproduct/viewproduct.component';
import { EditproductComponent } from './admin/editproduct/editproduct.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { ProductviewComponent } from './user/productview/productview.component';
import { RegistercomplaintComponent } from './user/registercomplaint/registercomplaint.component';
import { ViewcomplaintstatusComponent } from './user/viewcomplaintstatus/viewcomplaintstatus.component';
import { AddcomplaintComponent } from './user/addcomplaint/addcomplaint.component';
import { ConfirmedusersComponent } from './admin/confirmedusers/confirmedusers.component';
import { PendingcomplaintsComponent } from './admin/pendingcomplaints/pendingcomplaints.component';
import { CompletedcomplaintsComponent } from './admin/completedcomplaints/completedcomplaints.component';
import { AllcomplaintsComponent } from './admin/allcomplaints/allcomplaints.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewweatherdataComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AdminhomeComponent,
    ProductregisterComponent,
    ViewcomplaintsComponent,
    ViewuserComponent,
    ViewproductComponent,
    EditproductComponent,
    UserhomeComponent,
    ProductviewComponent,
    RegistercomplaintComponent,
    ViewcomplaintstatusComponent,
    AddcomplaintComponent,
    ConfirmedusersComponent,
    PendingcomplaintsComponent,
    CompletedcomplaintsComponent,
    AllcomplaintsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
