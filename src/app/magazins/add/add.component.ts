import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MagazinService } from '../magazin.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  admins:any = [];

  add = new FormGroup({
    label: new FormControl('',Validators.required),
    idAdmin: new FormControl('',Validators.required),
    
  })
  constructor(private magazins :MagazinService,private router:Router) { }

  ngOnInit(): void {
    this.getAdminsList();
  }

  getAdminsList(){
    this.magazins.getAdmins().subscribe((list)=>{
      console.log(list);
      this.admins = list;
      
    })
  }

  addMagazin(){
    this.magazins.addMagazin(this.add.value).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/home/magains/list'])

      
    })
  }
}
