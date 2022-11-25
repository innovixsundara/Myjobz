import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyjobComponent } from './component/applyjob/applyjob.component';
import { ViewjobComponent } from './component/viewjob/viewjob.component';


import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'applyjob',component:ApplyjobComponent},
  {path:'viewjob',component:ViewjobComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[LoginComponent,ApplyjobComponent,ViewjobComponent]
