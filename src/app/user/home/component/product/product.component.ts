import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { CartService } from 'src/app/cart_Service/cart.service';
import { AdminService } from 'src/app/service/admin.service';
import { Options, LabelType } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  category: any;
  categories_section_begin: any;
  all_product: any;
  count_product: any;
  category_limit: any;
  cate: number = 0;
  product_by_category_1: any;
  product_by_category_2: any;
  product_by_category_3: any;
  product_by_category_4: any;

  brand:any;
  // list_product:any;

  //phân trang
  // POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 9;
  tableSizes: any = [5, 10, 15, 20];
  //end

  constructor(
    private admin: AdminService,
    private _router: ActivatedRoute,
    private cartService: CartService,
    private router: Router,
    // private authGuard: AuthGuard,
    private authService: AuthService
  ) { }
  private subscription: Subscription;
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
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  ngOnInit() {
    this.getall_prduct();
    this.getall_categories_section_begin();
    this.get_cart()
    this.get_filter_products();
  }
  getall_categories_section_begin() {
    this.subscription = this.admin.get_index_product().subscribe((data: any) => {
      console.log(data);
      this.categories_section_begin = data.product;
      this.all_product = data.all_product;
      this.count_product = data.count_product;
      this.category_limit = data.category_limit;
      console.log('aaall', this.all_product)
    }, error => {
      console.log(error);
    }
    )
  }


  getall_prduct() {
    this.subscription = this.admin.get_index_product().subscribe((data: any) => {
      console.log(data);
      console.log(data.category);
      this.category = data.category;
      this.brand=data.brand;
    }, error => {
      console.log(error);
    }
    )
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
    this.admin.getallcart().subscribe((data: any) => {
      this.datacart = data;
      console.log('data giỏ hàng', this.datacart);
    })
  };


// lọc sản phẩm
  min_price: number = 0;
  max_price: number = 200000000;

  // chọn giá
  options: Options = {
    floor: 0,
    ceil: 50000000,
  };
  selectedCategory: number;
  category_id: number;
  filter_products: any;

  selectCategory(index: number) {
    this.selectedCategory = index;
  }

  get_filter_products(category_id?: number) {
    if (category_id !== undefined) {
      this.category_id = category_id;
    }
    this.admin.get_filter_products(this.category_id, this.min_price, this.max_price)
      .subscribe(data => {
        this.filter_products = data;
        console.log('filter', this.filter_products)
      }, error => {
      });
  }

}
