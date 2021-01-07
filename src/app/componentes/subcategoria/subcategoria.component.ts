import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Router, ActivatedRoute, Route, ParamMap } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos.service';
import { Producto } from 'src/app/modelos/producto';
import { switchMap } from 'rxjs/Operators';
import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-subcategoria',
    templateUrl: './subcategoria.component.html',
    styleUrls: ['./subcategoria.component.scss']
})
export class SubcategoriaComponent implements OnInit {

    @Input() id: string;
    @Input() maxSize: number = 7
    @Output() pageChange: EventEmitter<number>;
    public p: number = 1;

    public productosSubcategoria: Observable<Producto[]>;
    public idProductoSubcategoria: Observable<Producto[]>;

    constructor(private route: ActivatedRoute, private producto: ProductosService) { }

    ngOnInit(): void {
        this.obtenerProductos();
        this.pageChange = new EventEmitter(true);
    }

    public obtenerProductos(): void {
        console.log('Ingreso!!!');
        this.productosSubcategoria = this.route.paramMap.pipe(switchMap((params: ParamMap) =>
            this.idProductoSubcategoria = this.producto.getProductosPorSubcategorias(params.get('id'))
        ));
        console.log(this.productosSubcategoria);
    }


}
