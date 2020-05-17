import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';
import { ProductType } from '../product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: ProductType 

  constructor(
    private routes: ActivatedRoute, 
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.getProduct();
  }
  getProduct(){
    this.routes.params.subscribe(param=>{
      this.productService.getProduct(param.id).subscribe(data=>{
      this.product=data;
      })
    })
   }
}
