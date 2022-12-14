import { Injectable } from '@angular/core';
import { Product } from './model/product.model';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  televisions:Product[]=[
    {
    productTitle:"Sony",
    productBrand:" Bravia 4K Android",
    productPrice:"84,999",
    productImage:"https://www.reliancedigital.in/medias/Sony-55X7500H-Televisions-491694864-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2MjMyNTB8aW1hZ2UvanBlZ3xpbWFnZXMvaDU5L2hhMC85NDQwNjM5MjIxNzkwLmpwZ3wxNmU3NDlhN2Q4MWRlMzhmYmQ0NDUyN2IxOGM3ZmY5YTc3MGQzMzQzNTZlNzY1ZDk0Mjc5ODMxOTBhNjA3NDdl0"
    },
    {
    productTitle:"Sony",
    productBrand:" TU E 60",
    productPrice:" 1 Lakh",
    productImage:"https://images.samsung.com/is/image/samsung/in-uhd-tv-tue60a-ua65tue60akxxl-fronttitangray-231850798?$684_547_PNG$"
    },
  
    {
    productTitle:"LG",
    productBrand:" Ultra HD 4K",
    productPrice:" 1.35 Lakh",
    productImage:"https://www.reliancedigital.in/medias/LG-75UM7600PTA-Televisions-491431577-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1OTU4NXxpbWFnZS9qcGVnfGltYWdlcy9oNjIvaGY0Lzk0NDA1NjE5ODc2MTQuanBnfGVkZjhlOTFhNGJiY2ZlMDQ3ZmVlZTdhMTEwMzI4MGViYzYxYTEyN2JiMDdhYjM1MGU3ZDIxZDY2ZmI4NjMxNDE"
    },
  
    {
    productTitle:"Samsung",
    productBrand:" QLED",
    productPrice:" 71,990",
    productImage:"https://www.reliancedigital.in/medias/Samsung-50Q60T-Televisions-491694878-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzNjUxMDN8aW1hZ2UvanBlZ3xpbWFnZXMvaDE2L2hjYS85NDQwNjI0OTM0OTQyLmpwZ3xjZjc4ODIwOGRjNzhjMDJjNmQ1OTA4MDA3MjdmYmUxNGJmYjdjZDk0MGI3ZTQ1NDdlN2FkNWRjNmQ4YjA2Yjkw"
    },
  
    {
    productTitle:"1 Plus",
    productBrand:" Full HD Smart LED",
    productPrice:"26,999",
    productImage:"https://www.reliancedigital.in/medias/ONEPLUS-43Y1-Television-491895011-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0OTUyNzV8aW1hZ2UvanBlZ3xpbWFnZXMvaDA5L2gwNS85MzMwMjM2ODgyOTc0LmpwZ3wxMmE4OTVkNjBjYTJmNmNjODgwMjI5MmYzYjI2OTg2ZGRhY2MzNzZjMmViNDBlNDc3MTY0MWE4OTkxNTE4MDBj"
    },
  
    {
    productTitle:"Samsung",
    productBrand:" Ultra HD (4K) ",
    productPrice:"67,999",
    productImage:"https://www.reliancedigital.in/medias/Samsung-55TU8000-Televisions-491694879-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3MTQzMjF8aW1hZ2UvanBlZ3xpbWFnZXMvaDhlL2g4Yi85NDQwNjI1OTE3OTgyLmpwZ3xiZjM3ODJhODg0MzA3YWRiNTdjMjcyYjhiMDdkNDFiMDgxZmQ4NTdjZjhjNWQzMDA4NDY0ODI3ZWVhMDI0Yzg3"
    }
]

getTelevisionsData():Product[]{
  return this.televisions;
}


}
