import { Component } from '@angular/core';
import { RouteSegment, Router } from '@angular/router';

@Component({
  templateUrl: `app/products/product-detail.component.html`
})

export class ProductDetailComponent {
  pageTitle: string = 'Product Detail';

  constructor(private _routeParams: RouteSegment,
              private _router: Router) {
    let id = +this._routeParams.getParam('id');
    console.log(id);
    this.pageTitle += `: ${id}`;
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }
}
