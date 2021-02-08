import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  statusLoadingUsername = "Loading...";

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.getUserInfo();


    this.auth.getHelloMessage().subscribe((data)=>{
      console.log(data);
      
    })
  }



  getUserInfo(){
    this.auth.getUserInfo().subscribe((data:any)=>{
      if (data == null) {
        localStorage.removeItem('token');
        this.router.navigate(['signin'])
      }else{
        console.log(data);
        this.statusLoadingUsername = data.username;
        this.getUserRoles();
        
      }
      
    },(error)=>{
      console.log(error.status);
      localStorage.removeItem('token');
        this.router.navigate(['signin'])
      
    })
  }


  getUserRoles(){
    this.auth.getUserRoles().subscribe((data)=>{
      console.log(data);
      
    })
  }
}
