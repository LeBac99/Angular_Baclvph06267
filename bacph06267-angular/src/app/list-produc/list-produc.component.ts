import { Component, OnInit } from '@angular/core';
import { ProductAddComponent } from '../product-add/product-add.component';
import { ProductService } from '../product.service';
import { ProductType } from '../product';

@Component({
  selector: 'app-list-produc',
  templateUrl: './list-produc.component.html',
  styleUrls: ['./list-produc.component.css']
})
export class ListProducComponent implements OnInit {
  products: ProductType[];
  constructor(
    private productService:ProductService,
  ) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts(){
    this.productService.getProducts().subscribe(data =>{
      this.products=data;
    });
  }
  deleteProduct(id){
  
    this.productService.deleteProduct(id).subscribe(data=>{
      
      this.products= this.products.filter(item=> item.id != data.id);
    
    })
  
  }
}
