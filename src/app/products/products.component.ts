import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products:Product[]=[
    {
      productTitle:"Product 1",
      description: "Beautiful and real nature imagery plays a number of roles in media art. Images of savannas, oceans, and landscapes evoke space and possibility, while forests",
      productImage:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
    },
    {
      productTitle:"Product 2",
      description: "Beautiful and real nature imagery plays a number of roles in media art. Images of savannas, oceans, and landscapes evoke space and possibility, while forests",
      productImage:"https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
    },
    {
      productTitle:"Product 3",
      description: "Beautiful and real nature imagery plays a number of roles in media art. Images of savannas, oceans, and landscapes evoke space and possibility, while forests",
      productImage:"https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928__480.jpg"
    },
    {
      productTitle:"Product 4",
      description: "Beautiful and real nature imagery plays a number of roles in media art. Images of savannas, oceans, and landscapes evoke space and possibility, while forests",
      productImage:"https://media.istockphoto.com/photos/wild-grass-in-the-mountains-at-sunset-picture-id1322277517?k=20&m=1322277517&s=612x612&w=0&h=ZdxT3aGDGLsOAn3mILBS6FD7ARonKRHe_EKKa-V-Hws="
    },
    {
      productTitle:"Product 5",
      description: "Beautiful and real nature imagery plays a number of roles in media art. Images of savannas, oceans, and landscapes evoke space and possibility, while forests",
      productImage:"https://media.istockphoto.com/photos/taj-mahal-mausoleum-in-agra-picture-id1146517111?k=20&m=1146517111&s=612x612&w=0&h=vHWfu6TE0R5rG6DJkV42Jxr49aEsLN0ML-ihvtim8kk="
    }
  ];
   //array to store the sent products
   productsSentByChild:any=[];
   productCount:number=0;
  getProductDetailsFromChild(productId:any){
    this.productsSentByChild.push(productId)
    this.productCount++;
  }



}
