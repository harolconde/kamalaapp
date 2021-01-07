import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductoCarrito } from 'src/app/modelos/producto-carrito';
import { ProductosService } from '../../servicios/productos.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public productosEnCesta$: Observable<ProductoCarrito[]> = of(this.producto.getProductosCesta());
    constructor(private producto: ProductosService) { }

    ngOnInit(): void {
        this.mostarProductosCesta();
    }

    public  mostarProductosCesta() {
        this.productosEnCesta$.subscribe(data => {
            return data;
            
        })
    }

}
