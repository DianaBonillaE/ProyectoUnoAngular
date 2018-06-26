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
import { PrincipalComponent } from './principal/principal.component';
import { ReportCustomersComponent } from './report-customers/report-customers.component';
import { InsertProductComponent } from './insert-product/insert-product.component';
import { InsertService } from './insert-product/insert.service';
import { ClientReportComponent } from './client-report/client-report.component';
import { ClientReportService } from './client-report/client-report-service';
import { ReportProductsComponent } from './report-products/report-products.component'; 
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './register/register-service';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductCategoryService } from './product-category/product-category.service'; 
import { ReportProductsService } from './report-products/report-products-service';
import { AboutComponent } from './about/about.component';
import { HomeAdministratorComponent } from './home-administrator/home-administrator.component';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { RegisterEmployeeService } from './register-employee/register-employee.service';
import { HomeEmployeeComponent } from './home-employee/home-employee.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ProductComponent } from './product/product.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceService } from './invoice/invoice.service';
import { InventoryService } from './inventory/inventory-service';
import { DeleteProductsComponent } from './delete-products/delete-products.component';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { DeleteProductsService } from './delete-products/delete-products.service';
import { UpdateProductsService } from './update-products/update-products.service';
import { ProductService } from './product/product.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CartComponent,
    PrincipalComponent,
    ReportCustomersComponent,
    InsertProductComponent,
    ClientReportComponent,
    ReportProductsComponent,
    RegisterComponent,
    ProductCategoryComponent,
    AboutComponent,
    HomeAdministratorComponent,
    RegisterEmployeeComponent,
    HomeEmployeeComponent,
    InventoryComponent,
    ProductComponent,
    InvoiceComponent,
    UpdateProductsComponent,
    DeleteProductsComponent,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LoginService,HomeService,FillCartService,InsertService, ClientReportService,RegisterService,ProductCategoryService,ReportProductsService,RegisterEmployeeService,InvoiceService,InventoryService,UpdateProductsService,DeleteProductsService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
