import { Component, OnInit } from '@angular/core';
import { ProductoDTO } from 'src/app/models/producto.dto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent implements OnInit {
  productos: ProductoDTO[] = [];

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.productosService.obtenerProductos().subscribe((productos) => {
      this.productos = productos;
      console.log(this.productos);
    });
  }
}
