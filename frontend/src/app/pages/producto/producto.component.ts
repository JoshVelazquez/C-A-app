import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { ProductoDTO } from 'src/app/models/producto.dto';
import { LoadingService } from 'src/app/services/loading.service';
import { ProductosService } from 'src/app/services/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent implements OnInit {
  producto: ProductoDTO | undefined;

  constructor(
    private productosService: ProductosService,
    private loadingService: LoadingService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.loadingService.show();
        this.productosService
          .obtenerProductoPorId(id)
          .pipe(finalize(() => this.loadingService.hide()))
          .subscribe({
            next: (producto) => {
              this.producto = producto;
              console.log(this.producto);
            },
            error: () => {
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo cargar el producto. Inténtalo más tarde.',
              });
            },
          });
      } else {
        this.router.navigate(['/']);
      }
    });
  }
}
