import { Component, OnInit } from '@angular/core';
import { ProductCategoryService } from '../product-category/product-category-service';
import { ReportProductsService } from './report-products-service';
import { ReportProducts } from '../Models/report-products';

@Component({
  selector: 'app-report-products',
  templateUrl: './report-products.component.html',
  styleUrls: ['./report-products.component.css']
})
export class ReportProductsComponent implements OnInit {

  private reports: ReportProducts[] = new Array<ReportProducts>();
  
   
  constructor() { }

  ngOnInit() {
  }

  
  /*falta un metodo en el ProductCAtegoryService para poder traer todas las categorias
  * getCategory()
  */

}
