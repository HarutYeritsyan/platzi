import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, combineLatest, filter, map, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../features/products/domain/models/product.model';
import { ProductService } from '../../features/products/application/usecases/product.service';
import { withCompletionStatus } from '../../core/utils/rxjs-utils';

interface VM {
  product: {
    data?: Product,
    error?: unknown
  }
}

@Component({
  selector: 'platzi-product-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  vm$?: Observable<VM>;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.vm$ = combineLatest({
      product: this.getProductDetail()
    });
  }

  private getProductDetail() {
    return this.getProductId().pipe(
      map(id => id ?? ''),
      filter(id => !!id),
      switchMap(id => withCompletionStatus(this.productService.getProduct(id)))
    );
  }

  private getProductId() {
    return this.route.paramMap.pipe(
      map(paramMap => paramMap.get('id'))
    );
  }
}
