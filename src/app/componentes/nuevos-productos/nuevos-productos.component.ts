import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Producto } from 'src/app/modelos/producto';
import { ProductosService } from '../../servicios/productos.service';

@Component({
    selector: 'app-nuevos-productos',
    templateUrl: './nuevos-productos.component.html',
    styleUrls: ['./nuevos-productos.component.scss']
})
export class NuevosProductosComponent implements OnInit {
    public productosNuevos: Array<Producto> = [];
    public productosAleatorios: Array<Producto> = [];
    constructor(private productos: ProductosService) { }
    customOptions: OwlOptions = {
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: false,
        dots: false,
        navSpeed: 700,
        navText: ['<img src="assets/logos/home/chevron-back-outline.png" width="45px" height="45px">', '<img src="assets/logos/home/chevron-forward-outline.png" width="45px" height="45px">'],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1
            },
            740: {
                items: 3
            },
            940: {
                items: 4
            }
        },
        nav: true
    }
    ngOnInit(): void {
        this.getProductosNuevos();
    }

    public getProductosNuevos(): void {
        this.productos.getProductosHome().subscribe(data => {
            let arrayRandom: number = data.length;
            let random;
            let seleccion;
            // Organizacion random
            for(let i = 0; i < arrayRandom; i++){
                random = Math.floor(Math.random() * (data.length));
                seleccion = data[random];
                this.productosNuevos.push(seleccion);
            }
        })
    }
}

