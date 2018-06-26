import { Component, OnInit } from '@angular/core';
import { ProductCategoryService } from '../product-category/product-category.service';
import { ReportProductsService } from './report-products-service';
import { ReportProducts } from '../Models/report-products';
import { ProductCategory } from '../Models/product-category';

@Component({
  selector: 'app-report-products',
  templateUrl: './report-products.component.html',
  styleUrls: ['./report-products.component.css']
})
export class ReportProductsComponent implements OnInit {

  private reports: ReportProducts[] = new Array<ReportProducts>();
  private categories: ProductCategory[] = new Array<ProductCategory>();
   
  constructor(private reportProductsService: ReportProductsService) { }

  ngOnInit() {
  }

  getCategories(){
    this.reportProductsService.findCategories().subscribe(
      (data: ProductCategory[]) => { this.categories = data}
    );
  }

  
}
