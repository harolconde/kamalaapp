import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Producto } from '../modelos/producto';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/Operators';
import { Banner } from '../modelos/banner';
import { Marca } from '../modelos/marcas';
import { Categoria } from '../modelos/categoria';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ProductoCarrito } from '../modelos/producto-carrito';
import { Subcategoria } from '../modelos/subcategoria';
import { Tip } from '../modelos/tip';


@Injectable({
    providedIn: 'root'
})
export class ProductosService {

    public promociones = [
        { "id": 1, "nombre": "Trio de esmaltes para uñas", "marca": "Nailmatic", "precio": 15000, "contenido": "3x8 ml", "img": "assets/imagenes/productos/trio-de-esmaltes-de-unas-nailmatic.svg" },
        { "id": 2, "nombre": "Pintalabios NOTE", "marca": "NOTE", "precio": 10000, "contenido": "30 gr", "img": "assets/imagenes/productos/trio-de-esmaltes-de-unas-nailmatic.svg" },
        { "id": 3, "nombre": "Set de baño ROSE", "marca": "ROSE", "precio": 45000, "contenido": "250 ml", "img": "assets/imagenes/productos/trio-de-esmaltes-de-unas-nailmatic.svg" },
        { "id": 4, "nombre": "Pinta uñas color verde", "marca": "Color Club", "precio": 5000, "contenido": "7 ml", "img": "assets/imagenes/productos/trio-de-esmaltes-de-unas-nailmatic.svg" },
        { "id": 5, "nombre": "Pinta uñas color verde", "marca": "Color Club", "precio": 5000, "contenido": "7 ml", "img": "assets/imagenes/productos/trio-de-esmaltes-de-unas-nailmatic.svg" },
        { "id": 7, "nombre": "Pinta uñas color verde", "marca": "Color Club", "precio": 5000, "contenido": "7 ml", "img": "assets/imagenes/productos/trio-de-esmaltes-de-unas-nailmatic.svg" }
    ]

    private productosCollection: AngularFirestoreCollection<Producto>;
    private productos: Observable<Producto[]>;
    private productosDoc: AngularFirestoreDocument<Producto>;
    private producto: Observable<Producto>;

    private bannerCollection: AngularFirestoreCollection<Banner>;
    private banners: Observable<Banner[]>;
    private bannersDoc: AngularFirestoreDocument<Banner>;
    private banner: Observable<Banner>;

    private marcasCollection: AngularFirestoreCollection<Marca>;
    private marcas: Observable<Marca[]>;
    private marcasDoc: AngularFirestoreDocument<Marca>;
    private marca: Observable<Marca>;

    private categoriasCollection: AngularFirestoreCollection<Categoria>;
    private categorias: Observable<Categoria[]>;
    private categoriasDoc: AngularFirestoreDocument<Categoria>;
    private categoria: Observable<Categoria>;

    private subcategoriasCollection: AngularFirestoreCollection<Subcategoria>;
    private subcategorias: Observable<Subcategoria[]>;
    private subcategoriasDoc: AngularFirestoreDocument<Subcategoria>;
    private subcategoria: Observable<Subcategoria>;

    // Tips
    private tipsCollection: AngularFirestoreCollection<Tip>;
    private tips: Observable<Tip[]>;
    private tipsDoc: AngularFirestoreDocument<Tip>;
    private tip: Observable<Tip>;
    
    // Array objetos carrito de compras
    public productosCarrito: Array<ProductoCarrito> = [];

    constructor(private firestore: AngularFirestore) { }

    //  Traer todos los productos
    public getProductosHome(): Observable<Producto[]> {
        this.productosCollection = this.firestore.collection<Producto>('producto');
        this.productos = this.productosCollection.valueChanges();
        return this.productos = this.productosCollection.snapshotChanges().pipe(map(changes => {
            return changes.map(action => {
                const data = action.payload.doc.data() as Producto;
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    }

    // Traer producto unico
    public getProducto(id: string): Observable<Producto>{
        this.productosDoc = this.firestore.doc<Producto>(`producto/${id}`);
        return this.producto = this.productosDoc.snapshotChanges().pipe(
            map((action) => {
                if(action.payload.exists === false){
                    return null;
                } else {
                    const data = action.payload.data() as Producto;
                    data.id = action.payload.id;
                    return data;
                }
            })
        )
    }

    // Traer todos los banners
    public getBanners(): Observable<Banner[]>{
        this.bannerCollection = this.firestore.collection<Banner>('banner');
        this.banners = this.bannerCollection.valueChanges();
        return this.banners = this.bannerCollection.snapshotChanges().pipe(map(changes => {
            return changes.map(action => {
                const data = action.payload.doc.data() as Banner;
                data.id = action.payload.doc.id;
                return data;
            })
        }))
    }

    // Traer todas las marcas
    public getMarcas(): Observable<Marca[]>{
        this.marcasCollection = this.firestore.collection<Marca>('marca');
        this.marcas = this.marcasCollection.valueChanges();
        return this.marcas = this.marcasCollection.snapshotChanges().pipe(map(changes => {
            return changes.map(action => {
                const data = action.payload.doc.data() as Marca;
                data.id = action.payload.doc.id;
                return data;
            })
        }))
    }

    // Traer todas las categorias
    public getCategorias(): Observable<Categoria[]>{
        this.categoriasCollection = this.firestore.collection<Categoria>('categoria');
        this.categorias = this.categoriasCollection.valueChanges();
        return this.categorias = this.categoriasCollection.snapshotChanges().pipe(map(changes => {
            return changes.map(action => {
                const data = action.payload.doc.data() as Categoria;
                data.id = action.payload.doc.id;
                return data;
            })
        }))
    }

    // Mostrar productos por categoria
    public getProductosPorCategoria(idCategoria: string): Observable<Producto[]>{
        this.productosCollection = this.firestore.collection<Producto>('producto', ref => ref.where('categoria.id', '==', idCategoria ));
        this.productos = this.productosCollection.valueChanges();
        return this.productos = this.productosCollection.snapshotChanges().pipe(map(changes => {
            return changes.map(action => {
                const data = action.payload.doc.data() as Producto;
                data.id = action.payload.doc.id;
                return data;
            })
        }))
    }

    // Mostrar productos por subcategorias
    public getProductosPorSubcategorias(idSubcategoria: string): Observable<Producto[]>{
        console.log(idSubcategoria);
        this.productosCollection = this.firestore.collection<Producto>('producto', ref => ref.where('subcategoria.id', '==', idSubcategoria));
        this.productos = this.productosCollection.valueChanges();
        return this.productos = this.productosCollection.snapshotChanges().pipe(map(changes => {
            return changes.map(action => {
                const data = action.payload.doc.data() as Producto;
                data.id = action.payload.doc.id;
                return data;
            })
        }))
    }

    // Mostrar productos por marca
    public getProductosPorMarca(idMarca: string): Observable<Producto[]>{
        this.productosCollection = this.firestore.collection<Producto>('producto', ref => ref.where('marca.id', '==', idMarca));
        this.productos = this.productosCollection.valueChanges();
        return this.productos = this.productosCollection.snapshotChanges().pipe(map(changes => {
            return changes.map(action => {
                const data = action.payload.doc.data() as Producto;
                data.id = action.payload.doc.id;
                return data;
            })
        }))
    }

    // Traer todos los tips
    // Mostrar tips de belleza
    public getTips(): Observable<Tip[]> {
        this.tipsCollection = this.firestore.collection<Tip>("tip");
        this.tips = this.tipsCollection.valueChanges();
        return this.tips = this.tipsCollection.snapshotChanges().pipe(
            map((changes) => {
                return changes.map((action)=> {
                    const data = action.payload.doc.data() as Tip;
                    data.id = action.payload.doc.id;
                    return data;
                })
            })
        )
    }

    // Traer todas las promociones 
    getPromocionesHome() {
        return this.promociones;
    }

    // Mostar productos en el carrito
    public getProductosCesta(){
        return this.productosCarrito;
    }

    
}
