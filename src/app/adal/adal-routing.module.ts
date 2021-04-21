import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';

import { AuthenticationGuard } from 'microsoft-adal-angular6';
import { AdalComponent } from './adal/adal.component';
import { InfoAdalComponent } from './info-adal/info-adal.component';

const routes: Routes = [
  {
    path: '', component: AdalComponent , pathMatch:'full',  canActivate: [AuthenticationGuard]
  },
  {
    path: 'info', component: InfoAdalComponent , pathMatch:'full',  canActivate: [AuthenticationGuard]
  }
  
];

@NgModule({
  declarations: [AdalComponent, InfoAdalComponent],
  imports: [[RouterModule.forChild(routes)],
  ],
  exports: [
    RouterModule
  ]
  
})
export class AdalRoutingModule { 
 
}
