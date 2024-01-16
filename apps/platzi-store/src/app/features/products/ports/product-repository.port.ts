import { Observable } from 'rxjs';
import { Product, ProductCategory } from '../domain/models/product.model';

export interface ProductRepository {
  getProducts(): Observable<Product[]>;
  searchProducts(title: string, filters?: Partial<{ priceMin: number; priceMax: number; categoryId: number }>): Observable<Product[]>;
  getProduct(id: string): Observable<Product>;
  getCategories(): Observable<ProductCategory[]>;
}