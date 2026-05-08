import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container py-5 animate__animated animate__fadeIn" *ngIf="product">
      <nav aria-label="breadcrumb" class="mb-4">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a routerLink="/catalogo">Catálogo</a></li>
          <li class="breadcrumb-item active">{{product.name}}</li>
        </ol>
      </nav>

      <div class="row g-5">
        <div class="col-md-6">
          <div class="img-container shadow rounded-4 overflow-hidden">
            <img [src]="product.image" class="img-fluid w-100" [alt]="product.name">
          </div>
        </div>
        <div class="col-md-6">
          <h1 class="display-5 fw-bold mb-3">{{product.name}}</h1>
          <div class="badge bg-warning text-dark mb-3 px-3 py-2 rounded-pill">{{product.category}}</div>
          <p class="h3 text-primary fw-bold mb-4">{{product.price | currency:'EUR'}}</p>
          <p class="lead mb-4 text-muted">{{product.description}}</p>
          
          <div class="info-grid mb-5">
            <div class="info-item">
              <i class="bi bi-geo-alt-fill text-primary"></i>
              <div>
                <strong>Origen</strong>
                <p class="mb-0 small text-muted">{{product.origin}}</p>
              </div>
            </div>
            <div class="info-item">
              <i class="bi bi-shield-check text-primary"></i>
              <div>
                <strong>Calidad</strong>
                <p class="mb-0 small text-muted">Certificación Premium</p>
              </div>
            </div>
          </div>

          <div class="d-grid gap-3 d-sm-flex flex-wrap">
            <button class="btn btn-primary btn-lg px-5 rounded-pill shadow-sm">
              Añadir al carrito
            </button>
            <a routerLink="/pago" class="btn btn-warning btn-lg px-5 rounded-pill">
              Comprar ahora
            </a>
            <a routerLink="/catalogo" class="btn btn-outline-secondary btn-lg px-5 rounded-pill">
              Volver al Catálogo
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .img-container img {
      transition: transform 0.5s ease;
    }
    .img-container:hover img {
      transform: scale(1.05);
    }
    .info-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      background: #f8f9fa;
      padding: 20px;
      border-radius: 15px;
    }
    .info-item {
      display: flex;
      align-items: center;
      gap: 15px;
    }
    .info-item i {
      font-size: 1.5rem;
    }
  `]
})
export class ProductDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  product?: Product;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(id).subscribe(data => {
      this.product = data;
    });
  }
}
