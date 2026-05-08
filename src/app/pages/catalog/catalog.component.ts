import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="catalog-container container py-5 animate__animated animate__fadeIn">
      <div class="text-center mb-5">
        <h1 class="display-4 fw-bold gradient-text">Nuestro Catálogo de Quesos</h1>
        <p class="lead text-white-50">Selección premium de los mejores quesos del mundo</p>
      </div>

      <div class="row g-4">
        <div class="col-md-6 col-lg-3" *ngFor="let product of products">
          <div class="card h-100 border-0 product-card">
            <div class="img-wrapper overflow-hidden">
              <img [src]="product.image" class="card-img-top" [alt]="product.name">
              <div class="category-badge">{{product.category}}</div>
            </div>
            <div class="card-body d-flex flex-column">
              <h5 class="card-title fw-bold text-white">{{product.name}}</h5>
              <p class="card-text text-white-50 small">{{product.description | slice:0:80}}...</p>
              <div class="mt-auto d-flex justify-content-between align-items-center">
                <span class="price fw-bold fs-5 text-primary">{{product.price | currency:'EUR'}}</span>
                <a [routerLink]="['/producto', product.id]" class="btn btn-outline-primary btn-sm rounded-pill px-3 btn-cheese-link">
                  Ver más
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .gradient-text {
      background: linear-gradient(45deg, var(--primary, #FFD700), var(--primary-dark, #FFA500));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .product-card {
      background: var(--bg-card, rgba(30, 30, 30, 0.6));
      border: 1px solid var(--glass-border, rgba(255, 255, 255, 0.08)) !important;
      backdrop-filter: blur(20px);
      transition: var(--transition, all 0.4s cubic-bezier(0.16, 1, 0.3, 1));
      border-radius: 15px;
    }
    .product-card:hover {
      border-color: var(--primary, #FFD700) !important;
      transform: translateY(-10px);
      box-shadow: 0 0 35px rgba(255, 215, 0, 0.15) !important;
    }
    .img-wrapper {
      height: 200px;
      position: relative;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
    }
    .img-wrapper img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
    .product-card:hover .img-wrapper img {
      transform: scale(1.1);
    }
    .category-badge {
      position: absolute;
      top: 10px;
      right: 10px;
      background: rgba(0, 0, 0, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(5px);
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: bold;
      color: var(--primary, #FFD700);
    }
    .btn-cheese-link {
      color: var(--primary, #FFD700) !important;
      border-color: var(--primary, #FFD700) !important;
    }
    .btn-cheese-link:hover {
      background-color: var(--primary, #FFD700) !important;
      color: var(--bg-dark, #0a0a0a) !important;
    }
  `]
})
export class CatalogComponent implements OnInit {
  private productService = inject(ProductService);
  products: Product[] = [];

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}

