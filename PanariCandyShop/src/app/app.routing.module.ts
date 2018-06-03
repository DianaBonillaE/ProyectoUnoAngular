import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FillCartComponent } from './fill-cart/fill-cart.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
    {path:'search-login',component: LoginComponent},
    {path:'search-home',component: HomeComponent},
    {path:'search-fillCart',component: FillCartComponent},
    {path: 'search-cart', component: CartComponent}
   
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule],
    declarations:[]

})
export class AppRoutingModule{}