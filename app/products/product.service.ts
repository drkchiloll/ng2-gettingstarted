import { Injectable } from '@angular/core';
import { Product } from './product';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
  private _productUrl = 'api/products/products.json';

  constructor(private _http: Http) {}
  getProducts(): Observable<Product[]> {
    return this._http.get(this._productUrl)
      .map((response: Response) => <Product[]>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this._handleError);
  }

  _handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }
}
