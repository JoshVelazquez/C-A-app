import { Component, OnInit } from '@angular/core';
import { ProductoDTO } from 'src/app/models/producto.dto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-hombre',
  templateUrl: './hombre.component.html',
  styleUrls: ['./hombre.component.css'],
})
export class HombreComponent implements OnInit {
  productos: ProductoDTO[] = [];

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.productosService.obtenerProductosHombre().subscribe((productos) => {
      this.productos = productos;
      console.log(this.productos);
    });
  }
}
