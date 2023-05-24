import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  submitted = false;

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.get_cart();
    // this.getErrorMessage(fieldName: string);
  }
  order_fromCreate: FormGroup = new FormGroup({
    payment_method : new FormControl(),
    shipping_fee : new FormControl(),
    receiver_name : new FormControl('', Validators.required),
    number_phone : new FormControl('',[ Validators.required, Validators.pattern('^[0-9]{10}$')]),
    receiver_address : new FormControl('', Validators.required),
    ward_id : new FormControl(),
    districts_id : new FormControl(),
    provinces_id : new FormControl(),
  });

  // kiểm tra tính hợp lệ của dữ liệu nhập
  // isInvalidField(fieldName: string) {
  //   const fieldControl = this.order_fromCreate.get(fieldName);
  //   return fieldControl?.invalid && fieldControl.touched;
  // }
  isInvalidField(fieldName: string) {
    const fieldControl = this.order_fromCreate.get(fieldName);
    return fieldControl?.invalid;
  }

  // validate
  getErrorMessage(fieldName: string) {
    const fieldControl = this.order_fromCreate.get(fieldName);
    if (fieldName === 'receiver_name') {
      if (fieldControl?.hasError('required')) {
        return 'Tên khách hàng không được để trống.';
      }
    }

    if (fieldName === 'number_phone') {
      if (fieldControl?.hasError('required')) {
        return 'Số điện thoại không được để trống.';
      }
      if (fieldControl?.hasError('pattern')) {
        return 'Vui lòng nhập số điện thoại gồm 10 chữ số.';
      }
    }

    if (fieldName === 'receiver_address') {
      if (fieldControl?.hasError('required')) {
        return 'Địa chỉ không được phép để trống.';
      }
    }
    return undefined;
    // Các thông báo lỗi khác cho các trường khác
  }
  onCreate() {
    this.submitted = true;  // Thiết lập submitted là true khi form được gửi

    if (this.order_fromCreate.invalid) {
      alert('Vui lòng điền đầy đủ thông tin và kiểm tra lại các trường bắt buộc.');
      return;
    }
    console.log("nêne",this.order_fromCreate.value)
    this.admin.create_order(this.order_fromCreate.value).subscribe((data: any) => {
        console.log('success', data)
        alert('Cảm ơn Khách hàng: '+this.order_fromCreate.value.receiver_name+' đã tạo đơn hàng!')
        localStorage.removeItem('cart_items');
        this.router.navigate(['/']);
    }
    )
  }
  datacart:any;
  product_carts:any;
  get_cart(){
    // this.admin.get_all_product() .subscribe((data: any)
    this.admin.getallcart().subscribe((data:any)=>{
      this.datacart=data;
      this.product_carts=data.cart_details

      console.log(  'data giỏ hàng',this.datacart);
    })
  };


}
