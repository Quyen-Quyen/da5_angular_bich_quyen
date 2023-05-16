import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart_Service/cart.service';
import { IndexComponent } from '../component/index/index.component';
import { AdminService } from '../../../service/admin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  itemIncart:number;
  constructor(
    private cartService:CartService,
    private admin: AdminService,
    ) { }

  ngOnInit() {
    // this.cartService.loadCart.subscribe((data:any)=>{
    //   this.itemIncart = data.length;
    //   console.log('quality cart',this.itemIncart)
    // })
    // this.cartService.loadCart();
    // this.items = this.cartService.getItems();
    // this.itemIncart=this.cartService.getItems().length;
    // console.log('nên pie',this.itemIncart)
    // this.index.getall_categories_section_begin();
    // this.cartService.saveCart();
    this.get_cart();
  }
  // itemIncart:any;
  get_cart(){
    // this.admin.get_all_product() .subscribe((data: any)
    this.admin.getallcart().subscribe((data:any)=>{
      this.itemIncart=data.cart_details.length;
      // this.info_product=data.cart_details
      // console.log(  'data đếm số sản phẩm',this.itemIncart);
    })
  };
}
