import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

 
export class AppComponent {
  title = 'FederationSSO';
  adalSessionState = localStorage.getItem("adal.state.login");
  constructor(router: Router){}
 

  isLoged():boolean{    
    console.log(this.adalSessionState);
    return ((this.adalSessionState!=null)&& (this.adalSessionState?.trim()!=""));
  } 
}

