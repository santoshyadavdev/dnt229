import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../services/datashare.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  cart$ = this.dataShareService.getCartData();
  constructor(private dataShareService: DatashareService) { }

  ngOnInit(): void {

  }

}
