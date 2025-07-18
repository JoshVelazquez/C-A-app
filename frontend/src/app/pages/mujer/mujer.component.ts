import { Component } from '@angular/core';
import { ProductoDTO } from 'src/app/models/producto.dto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-mujer',
  templateUrl: './mujer.component.html',
  styleUrls: ['./mujer.component.css'],
})
export class MujerComponent {
  productos: ProductoDTO[] = [];

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.productosService.obtenerProductosMujer().subscribe((productos) => {
      this.productos = productos;
      console.log(this.productos);
    });
  }
}
