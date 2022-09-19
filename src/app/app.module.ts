import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegestrationComponent } from './user-regestration/user-regestration.component';
import { UserListComponent } from './user-list/user-list.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { TelevisionsComponent } from './televisions/televisions.component';
import { BikesComponent } from './bikes/bikes.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegestrationComponent,
    UserListComponent,
    ProductsComponent,
    FooterComponent,
    ProductDetailsComponent,
    HomeComponent,
    RegisterComponent,
    ContactusComponent,
    LoginComponent,
    MobilesComponent,
    TelevisionsComponent,
    BikesComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
