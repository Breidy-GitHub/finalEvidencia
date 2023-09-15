import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Asegúrate de importar el Router

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  nombre: string = '';
  apellido: string = '';
  email: string = '';
  telefono: string = '';
  password: string = '';

  constructor(private router: Router) {} // Inyecta el Router en el constructor

  ngOnInit() {}

  // Esta función no realiza ninguna acción
  register() {
    // Puedes dejar esta función vacía, ya que no necesitas procesamiento lógico
  }

  back() {
    this.router.navigate(['./cards']);
  }

  backLogin() {
    this.router.navigate(['./login']);
  }
}


