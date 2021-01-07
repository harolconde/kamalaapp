import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { TodosLosProductosComponent } from './componentes/todos-los-productos/todos-los-productos.component';
import { MarcasComponent } from './componentes/marcas/marcas.component';
import { ProductoDetalleComponent } from './componentes/producto-detalle/producto-detalle.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductosService } from './servicios/productos.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './componentes/header/header.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { DetalleProductoComponent } from './componentes/detalle-producto/detalle-producto.component';
import { NuevosProductosComponent } from './componentes/nuevos-productos/nuevos-productos.component';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { CarritoComprasComponent } from './componentes/carrito-compras/carrito-compras.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { SubcategoriaComponent } from './componentes/subcategoria/subcategoria.component';
import { TipsDeBellezaComponent } from './componentes/tips-de-belleza/tips-de-belleza.component';
import { PoliticasYterminosYcondicionesComponent } from './componentes/politicas-yterminos-ycondiciones/politicas-yterminos-ycondiciones.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        MenuComponent,
        FooterComponent,
        TodosLosProductosComponent,
        MarcasComponent,
        ProductoDetalleComponent,
        HeaderComponent,
        DetalleProductoComponent,
        NuevosProductosComponent,
        CategoriasComponent,
        CarritoComprasComponent,
        RegistroComponent,
        SubcategoriaComponent,
        TipsDeBellezaComponent,
        PoliticasYterminosYcondicionesComponent,
        ContactoComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        CarouselModule,
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule
    ],
    providers: [
        ProductosService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
