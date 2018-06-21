import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { PrincipalComponent } from './principal/principal.component';
import { ReportCustomersComponent} from './report-customers/report-customers.component';
import { InsertProductComponent } from './insert-product/insert-product.component';
import { ClientReportComponent } from './client-report/client-report.component';

const routes: Routes = [
    {path:'search-login',component: LoginComponent},
    {path:'search-home',component: HomeComponent},
    {path: 'search-cart', component: CartComponent},
    {path: 'principal', component: PrincipalComponent},
    {path: 'report-customers', component: ReportCustomersComponent},
    {path: 'insert-product', component: InsertProductComponent},
    {path: 'client-report', component: ClientReportComponent}
   ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule],
    declarations:[]

})
export class AppRoutingModule{}