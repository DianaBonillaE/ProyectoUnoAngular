import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/product';
import { ReportProducts } from '../Models/report-products' 
import { InventoryService} from './inventory-service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  //public products: Product[] = new Array<Product>();
  public products: ReportProducts[] = new Array<ReportProducts>();
  productId: number;
  units: number;
  constructor(private inventoryService: InventoryService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this.inventoryService.getAllProducts().subscribe(
      (data: ReportProducts[]) => {this.products = data}
    );
  }
  /*
  updateInventory(){
    this.inventoryService.update(this.units,this.productId).subscribe
  }
  */
}
