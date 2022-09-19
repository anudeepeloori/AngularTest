import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../model/product.model';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent  {
  //to receive data from parent 
  @Input() productObj?:Product;

 

  //create a custom event
  @Output() myEvent=new EventEmitter()
  sendProductDetailsToParent(productTitle:any){
    this.myEvent.emit(productTitle);
  }
}
