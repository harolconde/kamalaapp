import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/Operators';
import { Producto } from 'src/app/modelos/producto';
import { ProductoCarrito } from 'src/app/modelos/producto-carrito';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
    selector: 'app-detalle-producto',
    templateUrl: './detalle-producto.component.html',
    styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent implements OnInit {

    public productoDetalle: Observable<Producto>;
    public formProductoAgregado = new FormGroup({
        cantidad: new FormControl("", Validators.required)
    })
    public cantidad: number = this.formProductoAgregado.get('cantidad').value;

    constructor(private route: ActivatedRoute, private producto: ProductosService) {

    }

    ngOnInit(): void {
        this.getIdProducto();
    }

    public getIdProducto(): void {
        this.productoDetalle = this.route.paramMap.pipe(switchMap((params: ParamMap) =>
            this.producto.getProducto(params.get('id'))
        ))
    }

    public cantidadMinus() {
        if (this.cantidad > 0) {
            return this.cantidad--;
        } else {
            return this.cantidad = 0;
        }
    }

    public cantidaMore() {
        return this.cantidad++;
    }

    public adicionalProductoAcesta(producto) {
        this.formProductoAgregado.get('cantidad').setValue(this.cantidad);
        const cantidad = this.formProductoAgregado.get('cantidad').value;
        if (cantidad > 0){
            const productoAgregado: ProductoCarrito = {
                id: producto.id,
                imgProducto: producto.imgProducto,
                nombre: producto.nombre,
                marca: producto.marca,
                precio: producto.precio,
                contenidoNeto: producto.contenidoNeto,
                unidadMedida: producto.unidadMedida,
                descripcion: producto.descripcion,
                calificacion: producto.calificacion,
                stock: producto.stock,
                categoria: producto.categoria,
                cantidad: cantidad,
                total: producto.precio * cantidad
            }
            this.producto.productosCarrito.push(productoAgregado);
            this.formProductoAgregado.reset();
            this.cantidad = 0;
        } else {
            alert('La cantidad del producto debe ser mayor a 0');
        }
        
    }
}
