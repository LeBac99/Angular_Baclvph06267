import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductType } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product:ProductType = new ProductType();
  constructor(
    private ProductService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
  }
addProduct(){
  this.ProductService.addProduct(this.product).subscribe(data=>{
    this.router.navigateByUrl('/product');
  })
}
}
