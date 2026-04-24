import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
// Importe le service
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-product-list',
  standalone: true,
   imports: [CommonModule, FormsModule, RouterModule], 
  
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService, // Injecte-le
    private router: Router
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(data => this.products = data.data.content);
  }

  // La méthode pour ajouter au panier
  buyProduct(product: any) {
    this.cartService.addToCart(product);
    // Optionnel : on redirige vers le paiement immédiatement
    this.router.navigate(['/cart']);
  }
  // À l'intérieur de ta classe ProductListComponent
addToCart(product: any) {
  this.cartService.addToCart(product);
  alert('Produit ajoutéee !');
}
}