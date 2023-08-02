import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {  Router  } from'@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userName:string="";
  password:string="";
  apiRes:any;
  constructor (private router:Router,private http:HttpClient){}
loginSubmit(){
  console.log("button clicked");
  console.log(this.userName);
  console.log(this.password);
  let res=this.http.get("http://localhost:8080/checkuser?username="+this.userName+"&password="+this.password)
  res.subscribe(
    data=>this.apiRes=data

  );
  if(this.apiRes==true)
  this.router.navigate(["/home"]);
}

}
