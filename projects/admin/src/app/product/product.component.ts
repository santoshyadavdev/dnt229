import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { DatashareService } from '../services/datashare.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productForm: FormGroup;

  constructor(private fb: FormBuilder,
    private dataShareService: DatashareService) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      id: [''],
      name: [''],
      price: [''],
      category: ['']
    });
  }

  addProduct() {
    this.dataShareService.addProduct(this.productForm.getRawValue());
  }

}
