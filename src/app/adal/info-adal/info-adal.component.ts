import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';

@Component({
  selector: 'app-info-adal',
  templateUrl: './info-adal.component.html',
  styleUrls: ['./info-adal.component.scss']
})
export class InfoAdalComponent implements OnInit {
  Name: String = "";
  UserMail: String = "";  
  UserName: String = "";
  Token: String = "";

  constructor(private adalSvc: MsAdalAngular6Service,private route: Router) {   
    if ((this.adalSvc.LoggedInUserName==undefined)||(this.adalSvc.LoggedInUserName===""))      
      this.route.navigateByUrl("/");  
   
    this.Name=this.adalSvc.LoggedInUserName;
    this.UserName=this.adalSvc.userInfo.userName;
    this.UserMail=this.adalSvc.LoggedInUserEmail;
    this.Token = this.adalSvc.accessToken;     
  }
  
  ngOnInit(): void {
  }

  onLogout():void{
    this.adalSvc.logout();        
  }
 
}
