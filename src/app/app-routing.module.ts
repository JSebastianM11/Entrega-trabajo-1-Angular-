import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos.component';
import { ListaproductosComponent } from './listaproductos/listaproductos.component';

const routes: Routes = [

  {path: "usuarios", component: UsuariosComponent},
  {path: "productos", component: ProductosComponent},
  {path: "listaproductos", component: ListaproductosComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
