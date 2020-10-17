import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConfigService, ConfigValue } from './config/config.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: AppConfigService, useValue: ConfigValue }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
