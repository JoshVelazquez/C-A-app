import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductoDTO } from '../models/producto.dto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private url = 'http://localhost:3000/api/productos';

  constructor(private http: HttpClient) { }

  obtenerProductos() {
    return this.http.get<ProductoDTO[]>(this.url);
  }

  obtenerProductosHombre() {
    return this.http.get<ProductoDTO[]>(this.url + '/ropa-hombre');
  }

  obtenerProductosMujer() {
    return this.http.get<ProductoDTO[]>(this.url + '/ropa-mujer');
  }

  obtenerProductosNinos() {
    return this.http.get<ProductoDTO[]>(this.url + '/ropa-ninos');
  }
}
