import { Component, OnInit } from '@angular/core';
import { RouteSegment, Router } from '@angular/router';
import { Product } from './product';
import { ProductService } from './product.service';
import { StarComponent } from '../shared/star.component';

@Component({
  templateUrl: `app/products/product-detail.component.html`,
  directives: [StarComponent]
})

export class ProductDetailComponent {
  pageTitle: string = 'Product Detail';
  productId: number;
  product: Product;
  constructor(private _routeParams: RouteSegment,
              private _router: Router,
              private _productService: ProductService) {
    let id = +this._routeParams.getParam('id');
    this.productId = id;
    this.pageTitle += `: ${id}`;
  }

  ngOnInit(): void {
    this._productService.getProducts()
      .subscribe(
        products => {
          this.product =
            products.find(product => product.productId === this.productId);
          console.log(this.product);
        }
      )
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }
}
