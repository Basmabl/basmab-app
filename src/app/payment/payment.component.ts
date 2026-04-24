import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

// CORRECTION DES CHEMINS (un seul ../ au lieu de deux)
import { CartService } from '../services/cart.service'; 
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  total: number = 0;
  paymentSuccess: boolean = false;

  constructor(
    private cartService: CartService, 
    private orderService: OrderService,
    private router: Router
  ) {
    this.total = this.cartService.getTotalPrice();
  }

  confirmPayment() {
    const userEmail = localStorage.getItem('userEmail');
    const orderData = {
      // CORRECTION TS7006 : On ajoute : any ici
      orderItems: this.cartService.getCartItems().map((item: any) => ({
        productId: item.id,
        quantity: 1,
        price: item.price
      })),
      paymentMethod: 'CREDIT_CARD',
      status: 'PAID',
      email: userEmail
    };

    this.orderService.placeOrder(orderData).subscribe({
      // CORRECTION TS7006 : On ajoute : any ici
      next: (res: any) => {
      alert("Paiement validé ! Un email de confirmation a été envoyé à " + userEmail);
        this.cartService.clearCart();
        this.router.navigate(['/products']);
      },
      // CORRECTION TS7006 : On ajoute : any ici
      error: (err: any) => {
        console.error("Erreur commande :", err);
        alert("Échec du paiement.");
      }
    });
  }
}