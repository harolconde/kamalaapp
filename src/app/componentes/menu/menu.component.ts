import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/modelos/categoria';
import { Marca } from '../../modelos/marcas';
import { ProductosService } from '../../servicios/productos.service';
import { Observable, of } from 'rxjs';
import { ProductoCarrito } from 'src/app/modelos/producto-carrito';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    public productosEnCesta$: Observable<ProductoCarrito[]> = of(this.producto.getProductosCesta());
    public marcas: Array<Marca> = [];
    public categorias: Array<Categoria> = [];

    constructor(private producto: ProductosService) { }

    ngOnInit(): void {
        this.mostrarMarcas();
        this.mostrarCategorias();
    }

    // Mostrar todas la marcas
    public mostrarMarcas(){
        this.producto.getMarcas().subscribe(data => {
            this.marcas = data;
        })
    }

    // Mostrar todas las categorias
    public mostrarCategorias(){
        this.producto.getCategorias().subscribe(data => {
            this.categorias = data;
            console.log(this.categorias);
        })
    }

}
