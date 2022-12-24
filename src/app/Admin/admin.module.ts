import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { TestapiComponent } from './dashboard/testapi/testapi.component';
import { CategoryProductComponent } from './dashboard/component/category-product/category-product.component';
import { IsAuthenticatedGuard } from '../is-authenticated.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestapiEditComponent } from './dashboard/testapi/testapi-edit/testapi-edit.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { CategoryProductEditComponent } from './dashboard/component/category-product/category-product-edit/category-product-edit.component';
import { CustomerComponent } from './dashboard/component/customer/customer.component';
import { CustomerEditComponent } from './dashboard/component/customer/customer-edit/customer-edit.component';
import { InfoSupplierComponent } from './dashboard/component/info-supplier/info-supplier.component';
import { InfoSupplierEditComponent } from './dashboard/component/info-supplier/info-supplier-edit/info-supplier-edit.component';
import { StaffComponent } from './dashboard/component/staff/staff.component';
import { StaffEditComponent } from './dashboard/component/staff/staff-edit/staff-edit.component';
import { OrderHistoryComponent } from './dashboard/component/order-history/order-history.component';
import { OrderHistoryEditComponent } from './dashboard/component/order-history/order-history-edit/order-history-edit.component';
import { OrderComponent } from './dashboard/component/order/order.component';
import { OrderEditComponent } from './dashboard/component/order/order-edit/order-edit.component';
import { PostsComponent } from './dashboard/component/posts/posts.component';
import { PostsEditComponent } from './dashboard/component/posts/posts-edit/posts-edit.component';
import { TypePostsEditComponent } from './dashboard/component/type-posts/type-posts-edit/type-posts-edit.component';
import { ProductSupplierComponent } from './dashboard/component/product-supplier/product-supplier.component';
import { ProductSupplierEditComponent } from './dashboard/component/product-supplier/product-supplier-edit/product-supplier-edit.component';
import { ProductComponent } from './dashboard/component/product/product.component';
import { ProductEditComponent } from './dashboard/component/product/product-edit/product-edit.component';
import { TransportComponent } from './dashboard/component/transport/transport.component';
import { TransportEditComponent } from './dashboard/component/transport/transport-edit/transport-edit.component';
import { TypePostsComponent } from './dashboard/component/type-posts/type-posts.component';
import { TypeVideoComponent } from './dashboard/component/type-video/type-video.component';
import { TypeVideoEditComponent } from './dashboard/component/type-video/type-video-edit/type-video-edit.component';
import { VideoComponent } from './dashboard/component/video/video.component';
import { VideoEditComponent } from './dashboard/component/video/video-edit/video-edit.component';
import { WarehouseComponent } from './dashboard/component/warehouse/warehouse.component';
// import { DashboardComponent } from './dashboard/component/';
import { WarehouseEditComponent } from './dashboard/component/warehouse/warehouse-edit/warehouse-edit.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { DashboardAdminComponent } from './dashboard/component/dashboard-admin/dashboard-admin.component';
// import { SanitizeHtmlPipe } from '../share/pipe/sanitize-html.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { SharedMessengerModule } from '../shared-messenger/shared-messenger.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


const routes: Routes = [
  {
    path:"",
    component: DashboardComponent,
    children:[
      // Test api
      {
        path:"testapi",
        component:TestapiComponent,
        canActivate: [IsAuthenticatedGuard],
      },
      // doashboard
      {
        path:"",
        component:DashboardAdminComponent,
        canActivate: [IsAuthenticatedGuard],
      },
      {
        path:"testapi-edit/:id",
        component:TestapiEditComponent,
        canActivate: [IsAuthenticatedGuard],
      },

      // danh mục sản phẩm
      {
        path:"category-product",
        component:CategoryProductComponent,
        canActivate: [IsAuthenticatedGuard],
      },
      {
        path:"category-edit/:id",
        component:CategoryProductEditComponent,
        canActivate: [IsAuthenticatedGuard],
      },

      // khách hàng
      {
        path:"customer",
        component:CustomerComponent,
        canActivate: [IsAuthenticatedGuard],
      },
      {
        path:"customer-edit/:id",
        component:CustomerEditComponent,
        canActivate: [IsAuthenticatedGuard],
      },
      // thông tin nhà cung cấp
      {
        path:"info-supplier",
        component:InfoSupplierComponent,
        canActivate: [IsAuthenticatedGuard],
      },
      {
        path:"info-supplier-edit/:id",
        component:InfoSupplierEditComponent,
        canActivate: [IsAuthenticatedGuard],
      },
      // Nhân viên
      {
        path:"staff",
        component:StaffComponent,
        canActivate: [IsAuthenticatedGuard],
      },
      {
        path:"Staff-edit/:id",
        component:StaffEditComponent,
        canActivate: [IsAuthenticatedGuard],
      },
      // lịch sử đơn hàng
      {
        path:"order-history",
        component:OrderHistoryComponent,
        canActivate: [IsAuthenticatedGuard],
      },
      {
        path:"order-history-edit/:id",
        component:OrderHistoryEditComponent,
        canActivate: [IsAuthenticatedGuard],
      },
      // Đơn hàng
      {
        path:"order",
        component:OrderComponent,
        canActivate: [IsAuthenticatedGuard],
      },
      {
        path:"order-edit/:id",
        component:OrderEditComponent,
        canActivate: [IsAuthenticatedGuard],
      },
      // Bài đăng
      {
        path:"posts",
        component:PostsComponent,
        canActivate: [IsAuthenticatedGuard],
      },
      {
        path:"posts-edit/:id",
        component:PostsEditComponent,
        canActivate: [IsAuthenticatedGuard],
      },
      // Sản phẩm nhà cung cấp
      {
        path:"product-supplier",
        component:ProductSupplierComponent,
        canActivate: [IsAuthenticatedGuard],
      },
      {
        path:"product-supplier-edit/:id",
        component:ProductSupplierEditComponent,
        canActivate: [IsAuthenticatedGuard],
      },
      // Sản phẩm
      {
        path:"product",
        component:ProductComponent,
        canActivate: [IsAuthenticatedGuard],
      },
      {
        path:"product-edit/:id",
        component:ProductEditComponent,
        canActivate: [IsAuthenticatedGuard],
      },
      // Vận chuyển
      {
        path:"transport",
        component:TransportComponent,
        canActivate: [IsAuthenticatedGuard],
      },
      {
        path:"transport-edit/:id",
        component:TransportEditComponent,
        canActivate: [IsAuthenticatedGuard],
      },
      // Loại bài đăng
      {
        path:"type-posts",
        component:TypePostsComponent,
        canActivate: [IsAuthenticatedGuard],
      },
      {
        path:"type-posts-edit/:id",
        component:TypePostsEditComponent,
        canActivate: [IsAuthenticatedGuard],
      },
      // Loại video đăng
      {
        path:"type-video",
        component:TypeVideoComponent,
        canActivate: [IsAuthenticatedGuard],
      },
      {
        path:"type-video-edit/:id",
        component:TypeVideoEditComponent,
        canActivate: [IsAuthenticatedGuard],
      },
      // video
      {
        path:"video",
        component:VideoComponent,
        canActivate: [IsAuthenticatedGuard],
      },
      {
        path:"video-edit/:id",
        component:VideoEditComponent,
        canActivate: [IsAuthenticatedGuard],
      },
      // Kho
      {
        path:"warehouse",
        component:WarehouseComponent,
        canActivate: [IsAuthenticatedGuard],
      },
      {
        path:"warehouse-edit/:id",
        component:WarehouseEditComponent,
        canActivate: [IsAuthenticatedGuard],
      },
    ]
    },
];

@NgModule({
  declarations: [
    DashboardComponent,
    TestapiComponent,
    TestapiEditComponent,
    CategoryProductComponent,
    SidebarComponent,
    CategoryProductEditComponent,
    CustomerComponent,
    CustomerEditComponent,
    InfoSupplierComponent,
    InfoSupplierEditComponent,
    StaffComponent,
    StaffEditComponent,
    OrderHistoryComponent,
    OrderHistoryEditComponent,
    OrderComponent,
    OrderEditComponent,
    PostsComponent,
    PostsEditComponent,
    ProductSupplierComponent,
    ProductSupplierEditComponent,
    ProductComponent,
    ProductEditComponent,
    TransportComponent,
    TransportEditComponent,
    TypePostsComponent,
    TypePostsEditComponent,
    TypeVideoComponent,
    TypeVideoEditComponent,
    VideoComponent,
    VideoEditComponent,
    WarehouseComponent,
    WarehouseEditComponent,
    // SanitizeHtmlPipe


  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CKEditorModule,
    NgxPaginationModule,
    HttpClientModule,
    SharedMessengerModule,
    Ng2SearchPipeModule,
    FormsModule,
    RouterModule.forChild(routes) // sử dụng để tạo vùng admin
  ]
})
export class AdminModule { }
