import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CartService {
  private items: any[] = [];

  addToCart(product: any) {
    this.items.push(product);
  }

  getCartItems() {
    return this.items;
  }

  getTotalPrice() {
    return this.items.reduce((total, prod) => total + prod.price, 0);
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}