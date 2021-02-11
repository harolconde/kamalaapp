import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Observable } from 'rxjs';
import { Producto } from 'src/app/modelos/producto';
import { ProductosService } from 'src/app/servicios/productos.service';
import { Categoria } from '../../modelos/categoria';
import { map, switchMap } from 'rxjs/Operators';
import { Subcategoria } from 'src/app/modelos/subcategoria';

@Component({
    selector: 'app-marcas',
    templateUrl: './marcas.component.html',
    styleUrls: ['./marcas.component.scss']
})
export class MarcasComponent implements OnInit {

    @Input() id: string;
    @Input() maxSize: number = 7
    @Output() pageChange: EventEmitter<number>;

    public productosMarca: Observable<Producto[]>;
    public idMarca: Observable<Producto[]>;
    public titulo: string;
    public p: number = 1;

    constructor(private producto: ProductosService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.obtenerId();
        this.showCategorias();
        this.pageChange = new EventEmitter(true);
    }

    public obtenerId(): void {
        this.productosMarca = this.route.paramMap.pipe(switchMap((params: ParamMap) =>
            this.idMarca = this.producto.getProductosPorMarca(params.get('id'))
        ));
        setTimeout(() => {
            this.mostrarId(this.productosMarca);
        }, 200);
    }

    public mostrarId(id): void {
        this.titulo = id.source.source.value.nombre;
    }

    public trackByItems(index: number, item: Producto): string {
        return item.subcategoria.id;
    }

    public showCategorias() {
        let itemsSubcategorias = document.getElementsByClassName('list-subcategorias');
        for (let i = 0; i < itemsSubcategorias.length; i++) {
        }
    }

}
