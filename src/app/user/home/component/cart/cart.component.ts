import { CurrencyPipe } from '@angular/common';
import { Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import { CartService } from 'src/app/cart_Service/cart.service';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // @ViewChildren('$subTotalWrap') subTotalItems: QueryList<ElementRef>;
  // @ViewChildren('subTotalWrap_existing')
  products:any[]=[];
  items:any = [];
  // subtotal :any;
  constructor(
    public cartService: CartService,
    private admin: AdminService,
    private currencyPipe: CurrencyPipe // private builder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.get_cart();
    // this.get_product();
    this.cartService.loadCart();
    this.items = this.cartService.getItems();
    console.log('itemmm',this.items)
    // this.subtotal();
    // console.log('')
    // console.log('itemsss',this.items);
  }


  changeSubtotal(idx :number, ev :any) {
    // let newquanlity = ev.target.value;
    // newquanlity=newquanlity>0?newquanlity:1;
    // ev.target.value=newquanlity
    this.items[idx].qtyTotal=ev.target.value
    console.log('ev',ev.target.value);
    this.cartService.saveCart();

  }


  subtotal(item:any){

    return item.qtyTotal*item.default_price;
  }

  //----- remove specific item
  removeFromCart(item:any) {
    this.cartService.removeItem(item);
    this.items = this.cartService.getItems();
  }

  // //----- clear cart item
  clearCart(items:any) {
    // this.items.forEach((item, index) => this.cartService.removeItem(index));
    this.cartService.clearCart(items);
    this.items = [...this.cartService.getItems()];
  }

    //----- calculate total
    get total() {
      return this.items.reduce(
        (sum:any, x:any) => ({
          qtyTotal: 1,
          default_price: sum.default_price + x.qtyTotal * x.default_price,
        }),
        { qtyTotal: 1, default_price: 0 }
      ).price;
    }
    // tổng tien
    get sumtotal(){
      // console.log('total',this.total+25000)
      return this.items.reduce(
        (sum:any, x:any) => ({
          qtyTotal: 1,
          default_price: this.total+25000,
        }),
        { qtyTotal: 1, default_price: 0 }
      ).price;
    }

    info_product:any;
    datacart:any;
    get_cart(){
      // this.admin.get_all_product() .subscribe((data: any)
      this.admin.getallcart().subscribe((data:any)=>{
        this.datacart=data;
        this.info_product=data.cart_details
        console.log(  'data giỏ hàng',this.info_product);
      })
    };
}
