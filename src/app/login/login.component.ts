import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Pour les directives de base
import { FormsModule } from '@angular/forms'; // 👈 INDISPENSABLE pour corriger l'erreur ngModel
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true, // Si ton projet utilise des standalone components
    imports: [CommonModule, FormsModule, RouterModule], 

  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginData = { username: '', password: '' };

  // 👈 On injecte le service pour fixer l'erreur TS2339
  constructor(
    private authService: AuthService, 
    private router: Router
  ) {}

  onLogin() {
    if (this.loginData.username && this.loginData.password) {
      // On précise (response: any) et (err: any) pour fixer les erreurs TS7006
      this.authService.login(this.loginData).subscribe({
        next: (response: any) => {
          console.log('✅ Connexion réussie');
          this.router.navigate(['/products']);
        },
        error: (err: any) => {
          console.error('❌ Erreur de login', err);
          alert('Identifiants incorrects');
        }
      });
    } else {
      alert('Veuillez remplir tous les champs');
    }
  }
} 