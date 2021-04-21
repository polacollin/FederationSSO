import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdalRoutingModule } from './adal-routing.module'
import { MsAdalAngular6Module, AuthenticationGuard, MsAdalAngular6Service} from 'microsoft-adal-angular6';
  
export function getAdalConfig() {
  return {
      tenant: 'common',
      clientId: '01df5d34-b5a6-4856-92e5-e15a1c3ece69',
      redirectUri:"http://localhost:4200",
      endpoints: {
        "https://localhost:4200/": "01df5d34-b5a6-4856-92e5-e15a1c3ece69"
      },
      navigateToLoginRequestUrl: false,
      authority: 'https://login.microsoftonline.com/common/oauth2/v2.0/',
      cacheLocation: 'localStorage' ,
      scope: "openid email profile"     
    };
}

@NgModule({
  declarations: [ 
        
  ],
  imports: [    
    CommonModule,
    AdalRoutingModule,     
    MsAdalAngular6Module.forRoot(getAdalConfig) 
  ],
  providers: [    
    AuthenticationGuard
   ]
})

export class AdalModule { 
  
 }

  
