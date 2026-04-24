import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  total: number = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartService.getTotalPrice();
  }

  goToPayment() {
    this.router.navigate(['/payment']);
  }

  clear() {
    this.cartItems = this.cartService.clearCart();
    this.total = 0;
  }
}