

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
    {path: 'home-admin', component: HomeAdministratorComponent}
   ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule],
    declarations:[]

})
export class AppRoutingModule{}