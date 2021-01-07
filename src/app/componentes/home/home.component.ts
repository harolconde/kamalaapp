import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Banner } from 'src/app/modelos/banner';
import { Producto } from 'src/app/modelos/producto';
import { Tip } from 'src/app/modelos/tip';
import { ProductosService } from '../../servicios/productos.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public productosNuevos: Array<Producto> = [];
    public kits: Array<Producto> = [];
    public banners: Array<Banner> = [];
    public tips: Array<Tip> = [];

    constructor(private productos: ProductosService) { }

    customOptions: OwlOptions = {
        loop: true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        dots: false,
        navSpeed: 700,
        navText: ['<img src="assets/logos/home/chevron-back-outline.png" width="45px" height="45px">', '<img src="assets/logos/home/chevron-forward-outline.png" width="45px" height="45px">'],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
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
        this.getPromocionesProductos();
        this.getBannersHome();
        this.getTipsDeBelleza();
    }

    public getProductosNuevos(): void {
        this.productos.getProductosHome().subscribe(data => {
            this.productosNuevos = data;
            console.log(this.productosNuevos);
        })
    }

    public getBannersHome(): void {
        this.productos.getBanners().subscribe(data => {
            this.banners = data;
            console.log(this.banners);
        });
    }

    public getTipsDeBelleza(){
        this.productos.getTips().subscribe((data) => {
            console.log(data);
            this.tips = data;
        })
    }

    public getPromocionesProductos(){
        //this.productosPromociones = this.productos.getPromocionesHome();
    }

}
