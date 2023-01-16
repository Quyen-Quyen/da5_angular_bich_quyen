import { Component, NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './home/component/index/index.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DetailComponent } from './home/component/detail/detail.component';
import { CartComponent } from './home/component/cart/cart.component';
import { VideoComponent } from './home/component/video/video.component';
import { SharedMessengerModule } from '../shared-messenger/shared-messenger.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { BlogComponent } from './home/component/blog/blog.component';
import { BlogDetailComponent } from './home/component/blog/blog-detail/blog-detail.component';
import { ProductComponent } from './home/component/product/product.component';
import { CheckoutComponent } from './home/component/checkout/checkout.component';
import { ContactComponent } from './home/component/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { SanitizeHtmlPipe } from '../share/pipe/sanitize-html.pipe';
// import { ReactiveFormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const router_home:Routes=[
  {
  path:"",
  component: HomeComponent,
  children:[
    {
      path:"",
      component: IndexComponent,
    },
    {
      path:"san-pham/:id",
      component:DetailComponent,
    },
    {
      path:"video",
      component:VideoComponent,
    },
    {
      path:"blog",
      component:BlogComponent,
    },
    {
      path:"chi-tiet-bai-viet/:id",
      component:BlogDetailComponent,
    },
    {
      path:"san-pham",
      component:ProductComponent,
    },
    {
      path:"gio-hang",
      component:CartComponent,
    },
    {
      path:"thanh-toan",
      component:CheckoutComponent,
    },
    {
      path:"lien-he",
      component:ContactComponent,
    },
  ]
}
]

@NgModule({
  declarations: [
    HomeComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    DetailComponent,
    CartComponent,
    VideoComponent,
    BlogComponent,
    BlogDetailComponent,
    ProductComponent,
    CheckoutComponent,
    ContactComponent,
    // SanitizeHtmlPipe
  ],
  imports: [
    CommonModule,
    SharedMessengerModule,
    ReactiveFormsModule,
    // ReactiveFormsModule,
    // BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forChild(router_home),
    CarouselModule
  ],
  providers:    [ CurrencyPipe ]
})
export class UserModule { }
