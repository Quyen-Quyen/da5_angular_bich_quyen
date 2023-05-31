import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
// import Swal from 'sweetalert2';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id: number = 0;
  product_detail: any=[];
  subTotal:any;

  product_all:any;
  product_id:any;
  detail_name: any;
  detail_default_price: any;
  detail_price: any;
  detail_img_src: any;
  detail_description: any;
  tech_specs: any;
  quantity: any;
  products:any[]=[];
  imgage_all:any[]=[];
  sizes:any[]=[];
  colors:any[]=[];
  // items:any;
  product_related:any;

  constructor(
    private admin: AdminService,
    private _router: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    // private cartService: CartService
  ) { }
  private subscription: Subscription

  ngOnInit() {
    this.get_detail();
    this.get_product_related();
    console.log('dữ liệu đấy',this.product_detail)


  }
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
      },
      1200: { // Thêm responsive cho hiển thị 5 ảnh
        items: 5
      },
      1600: { // Thêm responsive cho hiển thị 6 ảnh
        items: 6
      }
    },
    nav: true
  }
  get_detail() {
    this.id = this._router.snapshot.params['id'];
    console.log('lấy id này',this.id);
    this.subscription = this.admin.get_detail(this.id).subscribe((data: any) => {

      console.log('nef',data[0].images);
      this.product_detail = data;
      this.product_id=data[0].id
      this.detail_name = data[0].name;
      this.detail_price = data[0].default_price;
      this.detail_img_src = data[0].images[0].image;
      this.detail_description = data[0].description;
      this.tech_specs = data[0].tech_specs;
      this.quantity = data[0].quantity;
      this.imgage_all=data[0].images
      this.sizes=data[0].sizes
      this.colors=data[0].colors

      console.log('data,',this.product_detail);
    })

  }
get_product_related(){
  // this.id=id,
  this.subscription = this.admin.get_product(this.id).subscribe(
    (data: any) => {

      this.product_related = data.product_related;
      // this.images=data.images;
      console.log('data--', this.product_related);
    },
    (error) => {
      console.log('data--111',error);
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
  selectedSize:number;
  selectedColor:number;
// thêm sản phẩm vào giỏ hàng
addProduct() {
  const product_id = this.id = this._router.snapshot.params['id'];
  // console.log('ahha',this.authService.islog)
  this.authService.islog.subscribe((isLogged: boolean) => {
    if (!isLogged) {
      alert('Bạn cần đăng nhập để sử dụng tính năng này!');
      this.router.navigate(['login']);
      return;
    }
  // const product_id = product.id;
  console.log('day',this.product_id)
  const quantity = 1;
  const selectedSize = this.selectedSize; // Lấy giá trị size đã chọn từ phần giao diện
    const selectedColor = this.selectedColor; // Lấy giá trị color đã chọn từ phần giao diện

  // Kiểm tra nếu số lượng sản phẩm là 0
  if (this.quantity == 0 || this.quantity == null) {
    alert('Sản phẩm đã hết hàng');
    return;
  }

  this.admin.create_cart(product_id, quantity, selectedSize, selectedColor).subscribe(
    (data) => {
      alert('Đã thêm thành công 1 sản phẩm vào giỏ hàng!');
    },
    (error) => {
      console.error('Lỗi khi thêm sản phẩm vào giỏ hàng', error);
    }
  );
});
}


}
