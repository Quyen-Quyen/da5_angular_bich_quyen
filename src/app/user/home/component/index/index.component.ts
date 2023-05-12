// import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/cart_Service/cart.service';
import { AdminService } from 'src/app/service/admin.service';
import { Router } from '@angular/router';

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
    navText: ['<', '>'],
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
    private router: Router
  ) {}
  private subscription: Subscription;
  ngOnInit(): void {
    this.getall_categories_section_begin();
    this.get_posts();
    this.get_cart();
    // gọi hàm loadCart() mới có dữ liệu cho hàm getItem()
    this.cartService.loadCart();
    // console.log( this.cartService.loadCart())
    this.items = this.cartService.getItems();
    console.log('haha', this.items);
    // this.get_prodcut_by_cate();
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

  items: any = [];
  addToCart(item: any) {
    if (!this.cartService.itemInCart(item)) {
      item.qtyTotal = 1;
      this.cartService.addToCart(item); //add items in cart
      this.items = [...this.cartService.getItems()];
      this.getall_categories_section_begin();
      alert('Đã thêm thành công 1 sản phẩm vào giỏ hàng!');
    }
  }

  // thêm sản phẩm vào giỏ hàng
  addProduct(product: any) {
    const product_id = product.id;
    const quantity = 1;
    console.log('id', product.id);

    // this.admin.create_cart(product_id :any ,quantity)
    this.admin.create_cart(product_id, quantity).subscribe(
      (data) => {
        console.log('Đã thêm sản phẩm vào giỏ hàng');
        // Xử lý thành công
      },
      (error) => {
        console.error('Lỗi khi thêm sản phẩm vào giỏ hàng', error);
        // Xử lý lỗi
      }
    );
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
