import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [ 
  {
    path: 'AdalSSO',
    loadChildren: () => import('./adal/adal.module').then(m=>m.AdalModule)
  } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
