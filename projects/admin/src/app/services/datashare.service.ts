import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {

  productList: Product[] = [];
  products$ = new Subject<Product[]>();

  constructor() { }

  addProduct(product: Product): void {
    this.productList.push(product);
    this.products$.next(this.productList);
  }

  getProductList(): Observable<Product[]> {
    return this.products$.asObservable();
  }

}
