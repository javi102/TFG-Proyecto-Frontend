import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';  
import { Router } from '@angular/router';  

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: FormGroup;

  constructor(private http: HttpClient, private router: Router) {
    this.form = new FormGroup({
      username: new FormControl(''),  
      email: new FormControl(''),
      password: new FormControl('')  
    });
  }

  onSubmit() {
    const formData = this.form.value;
    // Envía la solicitud POST al backend
    this.http.post('http://localhost:3000/register', formData)
      .subscribe(
        (response: any) => {
          console.log('Registro exitoso:', response);
         
          // Redirigir al login después del registro exitoso
          this.router.navigate(['/champions-list']);
        },
        (error: any) => {
          console.error('Error en el registro:', error);
        }
      );
  }
}
