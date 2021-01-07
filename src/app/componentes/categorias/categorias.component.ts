import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Observable } from 'rxjs';
import { Producto } from 'src/app/modelos/producto';
import { ProductosService } from 'src/app/servicios/productos.service';
import { Categoria } from '../../modelos/categoria';
import { map, switchMap } from 'rxjs/Operators';
import { Subcategoria } from 'src/app/modelos/subcategoria';




@Component({
    selector: 'app-categorias',
    templateUrl: './categorias.component.html',
    styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {
    @Input() id: string;
    @Input() maxSize: number = 7
    @Output() pageChange: EventEmitter<number>;

    public productosCategoria: Observable<Producto[]>;
    public idCategoria: Observable<Producto[]>;
    public titulo: string;
    public p: number = 1;

    constructor(private producto: ProductosService, private route: ActivatedRoute) {
        // const trackByIdentity = (index: string, item: any) => item;
    }

    ngOnInit(): void {
        this.obtenerId();
        this.showSubcategorias();
        this.pageChange = new EventEmitter(true);
    }

    public obtenerId(): void {
        this.idCategoria = this.route.paramMap.pipe(switchMap((params: ParamMap) =>
            this.productosCategoria = this.producto.getProductosPorCategoria(params.get('id'))
        ));
        setTimeout(() => {
            this.mostrarId(this.idCategoria);

        }, 200);

    }

    public mostrarId(id): void {
        this.titulo = id.source.source.value.nombre;
        console.log(this.titulo);
    }

    public trackByItems(index: number, item: Producto): string {
        return item.subcategoria.id;
    }

    public showSubcategorias() {
        let itemsSubcategorias = document.getElementsByClassName('list-subcategorias');
        console.log(itemsSubcategorias);
        for (let i = 0; i < itemsSubcategorias.length; i++) {
            console.log(i);
        }
    }

    
}
