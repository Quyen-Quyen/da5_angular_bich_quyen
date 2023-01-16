import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
// import Swal from 'sweetalert2';
import { CartService } from 'src/app/cart_Service/cart.service';
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

  detail_name: any;
  detail_default_price: any;
  detail_price: any;
  detail_img_src: any;
  detail_description: any;
  products:any[]=[];
  // items:any;
  // totalquanlity: number=this.cartService.getcarttotalquanlity();

  constructor(
    private admin: AdminService,
    private _router: ActivatedRoute,
    private cartService: CartService
  ) { }
  private subscription: Subscription

  ngOnInit() {
    this.get_detail();

    this.get_all_product();
    console.log('dữ liệu đấy',this.product_detail)
    // this.cartService.loadCart();
    // this.items = this.cartService.getItems();
  }
  get_detail() {
    this.id = this._router.snapshot.params['id'];

    this.subscription = this.admin.get_detail(this.id).subscribe((data: any) => {

      console.log('nef',data);
      this.product_detail = data;

      this.detail_name = data.name;
      this.detail_price = data.default_price;
      this.detail_img_src = data.img_src;
      this.detail_description = data.description;
      // console.log(this.detail_name);
      // this.product_detail = data;
      console.log('data,',this.product_detail);
    })
  }
  get_all_product(){
    this.subscription = this.admin.get_all_product().subscribe((data:any)=>{
      console.log('chịu',data.product);
      this.product_all=data.product;
    })
  }




  items:any = [];
  addToCart(item:any) {
    if (!this.cartService.itemInCart(item)) {
      item.qtyTotal = 1;
      this.cartService.addToCart(item); //add items in cart
      this.items = [...this.cartService.getItems()];
      alert('Đã thêm thành công 1 sản phẩm vào giỏ hàng!')
    }
  }
}