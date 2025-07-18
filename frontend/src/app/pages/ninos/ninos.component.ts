import { Component, OnInit } from '@angular/core';
import { ProductoDTO } from 'src/app/models/producto.dto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-ninos',
  templateUrl: './ninos.component.html',
  styleUrls: ['./ninos.component.css']
})
export class NinosComponent implements OnInit {
  productos: ProductoDTO[] = [];
  
    constructor(private productosService: ProductosService) {}
  
    ngOnInit(): void {
      this.productosService.obtenerProductosNinos().subscribe((productos) => {
        this.productos = productos;
        console.log(this.productos);
      });
    }
}
