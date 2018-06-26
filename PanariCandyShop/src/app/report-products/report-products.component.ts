import { Component, OnInit } from '@angular/core';
import { ProductCategoryService } from '../product-category/product-category.service';
import { ReportProductsService } from './report-products-service';
import { ReportProducts } from '../Models/report-products';
import { ProductCategory } from '../Models/product-category';
declare var jquery:any;
declare var $ :any;
declare var jsPDF: any;



@Component({
  selector: 'app-report-products',
  templateUrl: './report-products.component.html',
  styleUrls: ['./report-products.component.css']
})
export class ReportProductsComponent implements OnInit {

  public reports: ReportProducts[] = new Array<ReportProducts>();
  public categories: ProductCategory[] = new Array<ProductCategory>();
  categoryId: number;
  
  constructor(private reportProductsService: ReportProductsService) { }

  ngOnInit() {
  this.getCategories();
  }

  getCategories(){
    this.reportProductsService.findCategories().subscribe(
      (data: ProductCategory[]) => { this.categories = data}
    );
  }


  getProductsReport(){
    //alert("hola" + this.categoryId);
    this.reportProductsService.filterProductByCategory(this.categoryId).subscribe(
      (data: ReportProducts[]) => { this.reports = data}
    );  
  }

/* Jquery*/

generatePDF(){
  var doc = new jsPDF();
  var specialElementHandlers = {
      '#editor': function (element, renderer) {
          return true;
      }
  };
  
  $('#cmd').click(function () {   
      doc.fromHTML($('#content').html(), 15, 15, {
          'width': 170,
              'elementHandlers': specialElementHandlers
      });
      doc.save('report.pdf');
  });
  
}

}
