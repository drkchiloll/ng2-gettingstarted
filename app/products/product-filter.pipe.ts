import { PipeTransform, Pipe } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter'
})

export class ProductFilterPipe implements PipeTransform {
  transform(value: Product[], args: string): Product[] {
    let filter: string = args ? args[0].toLocaleLowerCase() + args.substring(1): null;
    console.log(filter);
    return filter ? value.filter((product: Product) =>
      product.productName.toLocaleLowerCase().indexOf(filter) != -1) : value;
  }
}
