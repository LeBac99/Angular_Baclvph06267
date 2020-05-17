import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { ProductType } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API :string='http://5d4849902d59e50014f20a3b.mockapi.io/product'
  constructor(
    private Http: HttpClient
  ) { }
  getProducts():Observable<ProductType[]>{
    return this.Http.get<ProductType[]>(`${this.API}`);
  }
  addProduct(product):Observable<ProductType>{
    return this.Http.post<ProductType>(`${this.API}`,product)
  }
  getProduct(id):Observable<ProductType>{
    return this.Http.get<ProductType>(`${this.API}/${id}`);
  }
  saveProduct(product):Observable<ProductType>{
    return this.Http.put<ProductType>(`${this.API}/${product.id}`, product)
  }
  deleteProduct(id):Observable<ProductType>{
    return this.Http.delete<ProductType>(`${this.API}/${id}`);
    
  }
}
