import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';  
import { Router } from '@angular/router';  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;

  constructor(private http: HttpClient, private router: Router) {
    this.form = new FormGroup({
      username: new FormControl(''),  
      password: new FormControl(''),   
    });
  }

  onSubmit() {
    const formData = this.form.value;
    
    // Envía la solicitud POST al backend para iniciar sesión
    this.http.post('http://localhost:3000/login', formData)
      .subscribe(
        (response: any) => {
          console.log('Inicio de sesión exitoso:', response);
          const userId = response.user.id; // Obtiene el ID del usuario
          localStorage.setItem('userId', userId); // Guarda el ID del usuario en localStorage
          this.router.navigate(['/champions-list']);  
        },
        (error: any) => {
          console.error('Error en el inicio de sesión:', error);
        }
      );
  }
}
