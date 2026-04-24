import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PaymentComponent } from './payment/payment.component'; // Ajouté car il manquait l'import
import { CartComponent } from './cart/cart.component';
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'products', component: ProductListComponent },
  
  // OPTION 1 : Si tu n'as pas de page CartComponent, commente cette ligne :
  // { path: 'cart', component: CartComponent }, 

  { path: 'payment', component: PaymentComponent },
  
  // Route par défaut
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'cart', component: CartComponent },
  // Route "Wildcard" pour rediriger si l'URL est fausse
  { path: '**', redirectTo: '/login' }
];