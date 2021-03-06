

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { RegisterComponent } from './register/register.component';
import {LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { PrincipalComponent } from './principal/principal.component';
import { ReportCustomersComponent} from './report-customers/report-customers.component';
import { InsertProductComponent } from './insert-product/insert-product.component';
import { ClientReportComponent } from './client-report/client-report.component';
import { ReportProductsComponent } from './report-products/report-products.component';
import { AboutComponent }from './about/about.component';
import { HomeAdministratorComponent } from './home-administrator/home-administrator.component';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { HomeEmployeeComponent } from './home-employee/home-employee.component';
import { ProductCategoryComponent } from './product-category/product-category.component'
import { InventoryComponent } from './inventory/inventory.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { DeleteProductsComponent } from './delete-products/delete-products.component';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
    {path:'',redirectTo:'search-home',pathMatch:'full'},
    {path:'search-login',component: LoginComponent},
    {path:'search-register',component: RegisterComponent},
    {path:'about-us',component: AboutComponent},
    {path:'search-home',component: HomeComponent},
    {path: 'search-cart', component: CartComponent},
    {path: 'principal', component: PrincipalComponent},
    {path: 'report-customers', component: ReportCustomersComponent},
    {path: 'insert-product', component: InsertProductComponent},
    {path: 'client-report', component: ClientReportComponent},
    {path: 'products-report', component: ReportProductsComponent},
    {path: 'home-admin', component: HomeAdministratorComponent},
    {path: 'register-employee', component: RegisterEmployeeComponent},
    {path: 'home-employee', component: HomeEmployeeComponent},
    {path: 'product-category', component: ProductCategoryComponent},
    {path: 'product', component: ProductComponent},
    {path: 'inventory', component: InventoryComponent},
    {path: 'invoice',component:InvoiceComponent},
    {path: 'delete-product', component: DeleteProductsComponent},
    {path: 'update-product', component: UpdateProductsComponent},
    
   ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule],
    declarations:[]

})
export class AppRoutingModule{}