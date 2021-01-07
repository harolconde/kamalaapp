import { Observable } from 'rxjs';
import { Marca } from './marcas';
export interface ProductoCarrito {
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
    categoria?: string;
    cantidad?: number;
    total: number
    //idCategoria?: string;  
}