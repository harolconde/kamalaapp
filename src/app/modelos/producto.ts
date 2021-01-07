import { Observable } from 'rxjs';
import { Categoria } from './categoria';
import { Marca } from './marcas';
import { Subcategoria } from './subcategoria';
export interface Producto {
    id?: string;
    imgProducto?: Observable<string>;
    nombre: string;
    marca: Marca;
    //idMarca?: string;
    precio: number;
    contenidoNeto: number;
    unidadMedida: string;
    descripcion: string;
    calificacion?: number;
    stock: number;
    categoria?: Categoria;
    subcategoria?: Subcategoria;  
}