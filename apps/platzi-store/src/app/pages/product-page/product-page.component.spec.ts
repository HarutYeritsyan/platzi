import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPageComponent } from './product-page.component';

import { createSpyFromClass } from 'jest-auto-spies';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { ProductService } from '../../features/products/application/usecases/product.service';

describe('ProductPageComponent', () => {
  let component: ProductPageComponent;
  let fixture: ComponentFixture<ProductPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProductPageComponent],
      providers: [
        {
          provide: ProductService,
          useValue: createSpyFromClass(ProductService)
        },
        {
          provide: ActivatedRoute,
          useValue:  {
            paramMap: of(convertToParamMap({
              id: 123
            }))
          }
        }
      ]
    });
    fixture = TestBed.createComponent(ProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
