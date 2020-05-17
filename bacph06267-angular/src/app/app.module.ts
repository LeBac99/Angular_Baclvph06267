import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { BannerComponent } from './banner/banner.component';
import { ActionComponent } from './action/action.component';
import { SellerProductsComponent } from './seller-products/seller-products.component';
import { AllComponent } from './all/all.component';
import { FlashDealsComponent } from './flash-deals/flash-deals.component';
import { BrandComponent } from './brand/brand.component';
import { FooterComponent } from './footer/footer.component';
import { CanvasComponent } from './canvas/canvas.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ListProducComponent } from './list-produc/list-produc.component';
import { MainHeaderComponent } from './main-header/main-header.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    NotFoundComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductDetailComponent,
    HeaderComponent,
    SliderComponent,
    BannerComponent,
    ActionComponent,
    SellerProductsComponent,
    AllComponent,
    FlashDealsComponent,
    BrandComponent,
    FooterComponent,
    CanvasComponent,
    ContactComponent,
    AboutComponent,
    ListProducComponent,
    MainHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
