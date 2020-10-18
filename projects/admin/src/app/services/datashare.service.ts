import { Injectable } from '@angular/core';
import { Product } from './product';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {

  productList: Product[] = [];
  products$ = new Subject<Product[]>();

  cart: Product[] = [];
  cart$ = new BehaviorSubject<Product[]>([]);

  constructor() { }

  addProduct(product: Product): void {
    this.productList.push(product);
    this.products$.next(this.productList);
  }

  getProductList(): Observable<Product[]> {
    return this.products$.asObservable();
  }

  addToCart(product: Product) {
    this.cart.push(product);
    this.cart$.next(this.cart);
  }

  getCartData(): Observable<Product[]> {
    return this.cart$.asObservable();
  }

}
