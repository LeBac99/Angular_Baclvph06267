import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductType } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: ProductType
  constructor(
    private routes:ActivatedRoute,
    private productService: ProductService,
    private router: Router
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
 saveProduct(){
  this.productService.saveProduct(this.product).subscribe(data=>{
    this.router.navigateByUrl('/product');
 });
}
}
