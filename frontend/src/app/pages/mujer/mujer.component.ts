import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { ProductoDTO } from 'src/app/models/producto.dto';
import { LoadingService } from 'src/app/services/loading.service';
import { ProductosService } from 'src/app/services/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mujer',
  templateUrl: './mujer.component.html',
  styleUrls: ['./mujer.component.css'],
})
export class MujerComponent {
  productos: ProductoDTO[] = [];

  constructor(
    private productosService: ProductosService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.loadingService.show();
    this.productosService
      .obtenerProductosMujer()
      .pipe(
        finalize(() => {
          this.loadingService.hide();
        })
      )
      .subscribe({
        next: (productos) => {
          this.productos = productos;
          console.log(this.productos);
        },
        error: () => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudieron cargar los productos. Inténtalo más tarde.',
          });
        },
      });
  }
}
