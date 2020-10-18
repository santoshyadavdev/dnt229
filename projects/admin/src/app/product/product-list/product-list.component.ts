import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DatashareService } from '../../services/datashare.service';
import { Product } from '../../services/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {

  productList$ = this.dataShareService.getProductList();

  constructor(private dataShareService: DatashareService) { }

  ngOnInit(): void {

  }

  addToCart(product: Product) {
    this.dataShareService.addToCart(product);
  }

}
