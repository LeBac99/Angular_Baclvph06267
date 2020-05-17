import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ListProducComponent } from './list-produc/list-produc.component';
import { ProductEditComponent } from './product-edit/product-edit.component';



const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
 
  {path:'home', component:HomeComponent},
  {path:'product', component:ListProducComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'detail/:id', component:ProductDetailComponent},
  {path:'product/add', component:ProductAddComponent},
  {path:'product/edit/:id', component:ProductEditComponent},
  { path:'**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
