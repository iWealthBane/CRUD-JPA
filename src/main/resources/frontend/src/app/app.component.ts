import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'frontend';
  boxes: any[] = []; // Cambia 'any[]' por el tipo correcto de tus datos si es posible
    imageUrl: string = "ruta/de/la/imagen.jpg";


}
