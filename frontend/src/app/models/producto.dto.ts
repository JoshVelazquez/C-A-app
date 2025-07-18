export interface ProductoDTO {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  tipo: string; // 'hombre', 'mujer', 'niños'
}
