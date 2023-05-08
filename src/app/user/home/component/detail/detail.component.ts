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
  tech_specs: any;
  quantity: any;
  products:any[]=[];
  imgage_all:any[]=[];
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

    // this.get_all_product();
    console.log('dữ liệu đấy',this.product_detail)
    // this.cartService.loadCart();
    // this.items = this.cartService.getItems();
  }
  get_detail() {
    this.id = this._router.snapshot.params['id'];

    this.subscription = this.admin.get_detail(this.id).subscribe((data: any) => {

      console.log('nef',data[0].images);
      this.product_detail = data;

      this.detail_name = data[0].name;
      this.detail_price = data[0].default_price;
      this.detail_img_src = data[0].images[0].image;
      this.detail_description = data[0].description;
      this.tech_specs = data[0].tech_specs;
      this.quantity = data[0].quantity;
      this.imgage_all=data[0].images

      console.log('data,',this.product_detail);
    })
  }
  // get_all_product(){
  //   console.log('dataaaaa');
  //   this.admin.get_all_product().subscribe((data:any)=>{
  //     console.log('chịu',data.product);
  //     this.product_all=data.product;
  //   })
  // }




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
