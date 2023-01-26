import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AllcomplaintsComponent } from './admin/allcomplaints/allcomplaints.component';
import { CompletedcomplaintsComponent } from './admin/completedcomplaints/completedcomplaints.component';
import { ConfirmedusersComponent } from './admin/confirmedusers/confirmedusers.component';
import { EditproductComponent } from './admin/editproduct/editproduct.component';
import { PendingcomplaintsComponent } from './admin/pendingcomplaints/pendingcomplaints.component';
import { ProductregisterComponent } from './admin/productregister/productregister.component';
import { ViewcomplaintsComponent } from './admin/viewcomplaints/viewcomplaints.component';
import { ViewproductComponent } from './admin/viewproduct/viewproduct.component';
import { ViewuserComponent } from './admin/viewuser/viewuser.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddcomplaintComponent } from './user/addcomplaint/addcomplaint.component';
import { ProductviewComponent } from './user/productview/productview.component';
import { RegistercomplaintComponent } from './user/registercomplaint/registercomplaint.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { ViewcomplaintstatusComponent } from './user/viewcomplaintstatus/viewcomplaintstatus.component';
import { ViewweatherdataComponent } from './viewweatherdata/viewweatherdata.component';

const routes: Routes = [{path:'viewweatherdata',component:ViewweatherdataComponent},
{path:'Home',component:HomeComponent,
children:
        [
          {path:'Login',component:LoginComponent},
          {path:'Register',component:RegisterComponent}
        ]},
{path:'',redirectTo:'/Home',pathMatch:'full'},
{path:'productregister',component:ProductregisterComponent},
{path:'userhome',component:UserhomeComponent,
children:
        [
          {path:'productview',component:ProductviewComponent},
          {path:'registercomplaint',component:RegistercomplaintComponent},
          {path:'viewcomplaintstatus',component:ViewcomplaintstatusComponent},
          {path:'addcomplaint/:id',component:AddcomplaintComponent}
        ]},
{path:'adminhome',component:AdminhomeComponent,
children:
        [
          {path:'productregister',component:ProductregisterComponent},
          {path:'viewcomplaints',component:ViewcomplaintsComponent},
          {path:'viewuser',component:ViewuserComponent},
          {path:'viewproduct',component:ViewproductComponent},
          {path:'editproduct/:id',component:EditproductComponent},
          {path:'confirmedusers',component:ConfirmedusersComponent},
          {path:'pendingcomplaints',component:PendingcomplaintsComponent},
          {path:'completedcomplaints',component:CompletedcomplaintsComponent},
          {path:'allcomplaints',component:AllcomplaintsComponent}
        ]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
