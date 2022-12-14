import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bikes=[
    {
      productTitle:"Honda Activa",
      productBrand:" Activa 6g",
      productPrice:"80,000",
      productImage:"https://bd.gaadicdn.com/processedimages/tvs/tvs-jupiter/640X309/tvs-jupiter600688a0a3d40.jpg?tr=w-290"
      },
      {
      productTitle:"Yamaha",
      productBrand:" YZF R15 V3",
      productPrice:" 1.6 Lakh",
      productImage:"https://media.zigcdn.com/media/model/2021/Apr/right-side-view-1850803425_930x620.jpg"
      },
    
      {
      productTitle:"Royal Enfield",
      productBrand:" Classic 350 ",
      productPrice:" 1.9 Lakh",
      productImage:"https://media.zigcdn.com/media/model/2021/Feb/right-side-view-1977503713_930x620.jpg"
      },
    
      {
      productTitle:"Suzuki",
      productBrand:" Hayabusa",
      productPrice:" 16.40 Lakh",
      productImage:"https://media.zigcdn.com/media/model/2021/Feb/right-side-view-1587054652_930x620.jpg"
      },
    
      {
      productTitle:"Yamaha",
      productBrand:" Yamaha MT 15",
      productPrice:"1.4 Lakh",
      productImage:"https://media.zigcdn.com/media/model/2020/Feb/lest-side-view-490637480_930x620.jpg"
      },
    
      {
      productTitle:"KTM",
      productBrand:" Duke 125",
      productPrice:"1.62 Lakh",
      productImage:"https://media.zigcdn.com/media/model/2020/Dec/right-side-view-663221337_930x620.jpg"
      }
  ]

}
