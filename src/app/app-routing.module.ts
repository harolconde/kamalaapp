import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarritoComprasComponent } from './componentes/carrito-compras/carrito-compras.component';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { DetalleProductoComponent } from './componentes/detalle-producto/detalle-producto.component';
import { HomeComponent } from './componentes/home/home.component';
import { MarcasComponent } from './componentes/marcas/marcas.component';
import { PoliticasYterminosYcondicionesComponent } from './componentes/politicas-yterminos-ycondiciones/politicas-yterminos-ycondiciones.component';
import { SubcategoriaComponent } from './componentes/subcategoria/subcategoria.component';
import { TodosLosProductosComponent } from './componentes/todos-los-productos/todos-los-productos.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'marcas/:id/:nombre',
    component: MarcasComponent
  },
  {
    path: 'todos-los-productos',
    component: TodosLosProductosComponent
  },
  {
    path: 'producto/:id',
    component: DetalleProductoComponent
  },
  {
    path:'categoria/:id/:nombre',
    component: CategoriasComponent
  },
  {
    path: 'cesta-de-productos',
    component: CarritoComprasComponent
  },
  {
    path: 'subcategoria/:id/:nombre',
    component: SubcategoriaComponent
  },
  {
    path: 'politicas-terminos-y-condiciones',
    component: PoliticasYterminosYcondicionesComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
