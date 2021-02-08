import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-siginin',
  templateUrl: './siginin.component.html',
  styleUrls: ['./siginin.component.css']
})
export class SigininComponent implements OnInit {


  auth = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required)
  })
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }


  connect(){
    this.authService.signin(this.auth.value).subscribe((data:any)=>{
      console.log(data);

      if (data.token) {
        localStorage.setItem('token',data.token);
        this.router.navigate(['/home'])

      }
      
    },(error)=>{
      if (error.status=== 401) {
        alert('wrong user name or password')
      }
      
    })
  }

}
