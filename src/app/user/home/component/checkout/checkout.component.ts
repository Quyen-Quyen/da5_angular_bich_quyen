import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
// import { AdminModule } from 'src/app/Admin/admin.module';
import { CartService } from 'src/app/cart_Service/cart.service';
import { test } from 'src/app/models/admin';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private admin: AdminService, public cartService: CartService, private router :Router) { }
  totall: any;
  items: any = [];

  
  test: any = [{
    product_id: 123,
    price: 222,
    qtyTotal: 3
  },
  {
    product_id: 122223,
    price: 222,
    qtyTotal: 3
  }
  ]
  product_cart:any=[];
  

  ngOnInit() {

    this.cartService.loadCart();
    this.items = this.cartService.getItems();
    // console.log('itemmm checkout', this.items)

    // console.log('day ne', this.sumtotal)
    // console.log('product',this.product)
    // console.log('tien',this.totall)

  }

  order_fromCreate: FormGroup = new FormGroup({

    total_price: new FormControl(this.sumtotal),
    name: new FormControl(),
    date_of_birth: new FormControl(),
    sex: new FormControl(),
    email: new FormControl(),
    adress: new FormControl(),
    number_phone: new FormControl(),
    order_product_list: new FormControl(this.product),


  });

  onCreate() {


    // console.log("item",this.test);
    console.log("total_price",this.order_fromCreate.value.total_price)
    console.log("order_product_list",this.order_fromCreate.value.order_product_list)
    this.admin.create_order(this.order_fromCreate.value).subscribe((data: any) => {
      // this.admin.create_order(formData).subscribe((data: any) => {
        console.log('success', data)
        alert('Cảm ơn Khách hàng: '+this.order_fromCreate.value.name+' đã đặt hàng!')
        localStorage.removeItem('cart_items');
        this.router.navigate(['/']);

      
    }
    )
  }



  //tính tiền theo số lượng
  subtotal(item: any) {

    return item.qtyTotal * item.price;
  }

  get product(){
    this.cartService.loadCart();
    // this.product_cart = this.cartService.getItems();
    return this.product_cart=this.cartService.getItems();
  }

  //----- calculate total (tính tổng tiền của toàn bộ)
  get total() {
    return this.product.reduce(
      (sum: any, x: any) => ({
        qtyTotal: 1,
        price: sum.price + x.qtyTotal * x.price,
      }),
      { qtyTotal: 1, price: 0 }
    ).price;
  }

  // tổng tien + ship
  get sumtotal() {
    // console.log('total',this.total+25000)
    return this.totall=this.product.reduce(
      (sum: any, x: any) => ({
        qtyTotal: 1,
        price: this.total + 25000,
      }),
      { qtyTotal: 1, price: 0 }
    ).price;
  }

 


}
