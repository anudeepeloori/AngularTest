import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import {Product} from '../model/product.model';


@Component({
  selector: 'app-televisions',
  templateUrl: './televisions.component.html',
  styleUrls: ['./televisions.component.css']
})
export class TelevisionsComponent implements OnInit {
  televisions:Product[]=[];
  constructor(private dsObj:DataService) { 

  }

  ngOnInit(){
    this.televisions=this.dsObj.getTelevisionsData();
  }

}
