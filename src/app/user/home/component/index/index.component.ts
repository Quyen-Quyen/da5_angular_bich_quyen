// import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { CartService } from 'src/app/cart_Service/cart.service';
import { AdminService } from 'src/app/service/admin.service';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  // data_setbg:any;
  posts: any;
  categories_section_begin: any;
  category: any;
  show_by_cate_product_13: any;
  show_by_cate_product_14: any;
  show_by_cate_product_15: any;
  all_product: any;
  featured_products: any;
  featured_post: any;
  store_information:any;
  //phân trang
  // POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 8;
  tableSizes: any = [5, 10, 15, 20];
  //end

  // totalquanlity: number = this.cartService.getcarttotalquanlity();

  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    // navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
  constructor(
    private admin: AdminService,
    private cartService: CartService,
    private router: Router,
    // private authGuard: AuthGuard,
    private authService: AuthService
  ) {}
  private subscription: Subscription;
  ngOnInit(): void {
    this.get_store_information();
    this.getall_categories_section_begin();
    this.get_posts();
    this.get_cart();
    this.get_banner();


  }
  get_store_information(){
    this.admin.get_store_information().subscribe((data:any)=>{
      this.store_information=data.store_information[0]

    })
  }
  getall_categories_section_begin() {
    this.subscription = this.admin.get_index_product().subscribe(
      (data: any) => {
        console.log('data_category', data.category);
        console.log(data.product);
        this.categories_section_begin = data.product;
        this.category = data.category_limit;
        // this.show_by_cate_product=data.show_by_cate_product;
        this.featured_products = data.featured_products;
        console.log('đây nè DŨng', this.featured_products);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  get_posts() {
    this.subscription = this.admin.get_index_posts().subscribe(
      (data: any) => {
        console.log('ảnh', data.featured_post);
        // console.log(data.type_posts);
        this.posts = data.posts_index;
        this.featured_post = data.featured_post;
        // this.type_posts = data.type_posts;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  banner_1:any;
  banner_2:any;
  banner_3:any;
  banner_4:any;
  get_banner(){
    this.admin.get_banner().subscribe(
      (data: any) => {
        // console.log(data.type_posts);
        this.banner_1 = data.banner_1?.image;
        this.banner_2 = data.banner_2?.image;
        this.banner_3 = data.banner_3?.image;
        this.banner_4 = data.banner_4?.image;
        // console.log('ảnh11111', data.banner.image);
        // this.type_posts = data.type_posts;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  //phân trang
  ontableDataChange(event: any) {
    this.page = event;
    this.getall_categories_section_begin();
  }
  ontableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getall_categories_section_begin();
  }

  // thêm sản phẩm vào giỏ hàng
  // addProduct(product: any) {
  //   // console.log('ahha',this.authService.islog)
  //   this.authService.islog.subscribe((isLogged: boolean) => {
  //     if (!isLogged) {
  //       alert('Bạn cần đăng nhập để sử dụng tính năng này!');
  //       this.router.navigate(['login']);
  //       return;
  //     }
  //   const product_id = product.id;
  //   const quantity = 1;

  //   this.admin.create_cart(product_id, quantity).subscribe(
  //     (data) => {
  //       alert('Đã thêm thành công 1 sản phẩm vào giỏ hàng!');
  //     },
  //     (error) => {
  //       console.error('Lỗi khi thêm sản phẩm vào giỏ hàng', error);
  //     }
  //   );
  // });
  // }
  // thêm sản phẩm vào giỏ hàng
  addProduct(product: any) {
    this.authService.islog.subscribe((isLogged: boolean) => {
      if (!isLogged) {
        alert('Bạn cần đăng nhập để sử dụng tính năng này!');
        this.router.navigate(['login']);
        return;
      }

      if (product.quantity == 0 || product.quantity == null) {
        alert('Sản phẩm đã hết hàng');
        return;
      }

      const product_id = product.id;
      const quantity = 1;

      // this.admin.create_cart(product_id, quantity).subscribe(
      //   (data) => {
      //     alert('Đã thêm thành công 1 sản phẩm vào giỏ hàng!');
      //   },
      //   (error) => {
      //     console.error('Lỗi khi thêm sản phẩm vào giỏ hàng', error);
      //   }
      // );
    });
  }

  datacart: any;
  get_cart() {
    // this.admin.get_all_product() .subscribe((data: any)
    this.admin.getallcart().subscribe((data: any) => {
      this.datacart = data;
      console.log('data giỏ hàng', this.datacart);
    });
  }
}
