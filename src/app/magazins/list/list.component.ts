import { Component, OnInit } from '@angular/core';
import { MagazinService } from '../magazin.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  magazinsList:any = [];
  constructor(private mag:MagazinService) { }

  ngOnInit(): void {
    this.getMagazins();
  }


  getMagazins(){
    this.mag.getMagazin().subscribe((list)=>{
      console.log(list);
      this.magazinsList = list;
      
    })
  }
}
