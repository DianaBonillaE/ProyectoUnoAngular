import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login-service';
import { AppRoutingModule} from './app.routing.module';
import { HomeComponent } from './home/home.component';
import { HomeService } from './home/home-service';
import { FillCartService } from './cart/fill-cart-service';
import { CartComponent } from './cart/cart.component';
import { ProductService } from './cart/product-service';
import { PrincipalComponent } from './principal/principal.component';
import { ReportCustomersComponent } from './report-customers/report-customers.component';
import { InsertProductComponent } from './insert-product/insert-product.component';
import { InsertService } from './insert-product/insert.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CartComponent,
    PrincipalComponent,
    ReportCustomersComponent,
    InsertProductComponent,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LoginService,HomeService,FillCartService,ProductService,InsertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
