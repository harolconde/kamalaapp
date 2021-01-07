import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductoCarrito } from 'src/app/modelos/producto-carrito';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
    selector: 'app-carrito-compras',
    templateUrl: './carrito-compras.component.html',
    styleUrls: ['./carrito-compras.component.scss']
})
export class CarritoComprasComponent implements OnInit {

    public productosEnCesta: Array<ProductoCarrito> = [];
    public total$: Observable<ProductoCarrito[]> = of(this.producto.getProductosCesta());
    public totales: number = 0;
    public minimo: number = 300000;
    public existenciaProducto: boolean;

    constructor(private producto: ProductosService) { }

    ngOnInit(): void {
        this.getProductosCesta();
        this.mostrarTotales();
        this.minimo = this.minimo - this.totales;
    }

    public getProductosCesta() {
        this.productosEnCesta = this.producto.getProductosCesta();
        console.log(this.productosEnCesta);
        if (this.productosEnCesta.length >= 1) {
            this.existenciaProducto = !this.existenciaProducto;
            console.log(this.existenciaProducto);
        }
        for (let i = 0; i < this.productosEnCesta.length; i++) {
            this.totales += this.productosEnCesta[i].total;
        }
    }

    public quitarProducto(producto) {
        let index = this.producto.productosCarrito.indexOf(producto);
        if (index > -1) {
            this.producto.productosCarrito.splice(index, 1);
            this.mostrarTotales()
        }
    }

    public agregarMasProducto(producto) {
        for (let i = 0; i < this.producto.productosCarrito.length; i++) {
            if (producto == this.producto.productosCarrito[i]) {
                this.producto.productosCarrito[i].cantidad = this.producto.productosCarrito[i].cantidad + 1;
                this.producto.productosCarrito[i].total = this.producto.productosCarrito[i].total + this.producto.productosCarrito[i].precio;
                this.mostrarTotales();
                this.minimo = this.minimo - this.producto.productosCarrito[i].precio;
            }
        }
        console.log(this.producto.productosCarrito);
        
    }

    public agregarMenosProducto(producto) {
        for (let i = 0; i < this.producto.productosCarrito.length; i++) {
            if (producto == this.producto.productosCarrito[i]) {
                this.producto.productosCarrito[i].cantidad = (this.producto.productosCarrito[i].cantidad - 1);
                this.producto.productosCarrito[i].total = this.producto.productosCarrito[i].total - this.producto.productosCarrito[i].precio;
                this.mostrarTotales();
                if (this.producto.productosCarrito[i].cantidad <= 1) {
                    this.producto.productosCarrito[i].cantidad = 1;
                    this.producto.productosCarrito[i].total = this.producto.productosCarrito[i].precio;
                    this.mostrarTotales();
                }
                this.minimo = this.minimo + this.producto.productosCarrito[i].precio;
                if(this.minimo >= 300000){
                    this.minimo = 300000 - this.totales;
                }
            }
        }
        
        console.log(this.producto.productosCarrito);
    }

    public mostrarTotales() {
        const habilitarCompra = document.getElementById('btn-comprar');
        this.totales = 0;
        for (let i = 0; i < this.productosEnCesta.length; i++) {
            this.totales += this.productosEnCesta[i].total;
            
        }
        if (this.totales < 20000) {
            habilitarCompra.setAttribute("disabled", "");
        }
    }

    public addCompra() {

    }

    public comprar() {
        var dataArray: Array<any> = [];

        for (let i = 0; i < this.productosEnCesta.length; i++) {
            var nombres = {
                name: this.productosEnCesta[i].nombre
            }
            dataArray.push(nombres);
        }
        var data = {
            //Parametros compra (obligatorio)
            name: 'Compra Kamala',
            description: 'Compra Kamala',
            invoice: "1234",
            currency: "cop",
            amount: this.totales,
            tax_base: "0",
            tax: "0",
            country: "co",
            lang: "es",

            //Onpage="false" - Standard="true"
            external: "false",


            //Atributos opcionales
            extra1: "extra1",
            extra2: "extra2",
            extra3: "extra3",
            confirmation: "http://secure2.payco.co/prueba_curl.php",
            response: "http://secure2.payco.co/prueba_curl.php",

            //Atributos cliente
            name_billing: "Andres Perez",
            address_billing: "Carrera 19 numero 14 91",
            type_doc_billing: "cc",
            mobilephone_billing: "3050000000",
            number_doc_billing: "100000000"

            //atributo deshabilitación metodo de pago
            //methodsDisable: ["TDC", "PSE","SP","CASH","DP"]

        }


        handler.open(data)
    }

    public comprarApi() {
        var data = {
            "public_key": "45b960805ced5c27ce34b1600b4b9f54",
            "tipo_doc": "CC",
            "documento": "123456789",
            "fechaExpedicion": "2005-01-01",
            "nombres": "Camilo",
            "apellidos": "Díaz",
            "email": "cliente@cliente.com",
            "pais": "CO",
            "depto": "Antioquia",
            "ciudad": "Medellín",
            "telefono": "4365234",
            "celular": "0000000000",
            "direccion": "Calle 67 # 23 - 22",
            "ip": "186.116.10.133",
            "factura": "43256",
            "descripcion": "Nuevo pago de 20.000",
            "iva": 0,
            "baseiva": 0,
            "valor": 20.000,
            "moneda": "COP",
            "tarjeta": "4575623182290326",
            "fechaexpiracion": "2018-06",
            "codigoseguridad": 123,
            "franquicia": "VISA",
            "cuotas": 1,
            "url_respuesta": "https://www.epayco.co/respuesta",
            "url_confirmacion": "https://www.epayco/callback",
            "metodoconfirmacion": "POST",
            "lenguaje": "javascript",
            "i": "MDAwMDAwMDAwMDAwMDAwMA==",
            "enpruebas": "true"
        }
    }

}
