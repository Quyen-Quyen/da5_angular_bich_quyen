import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart_Service/cart.service';
import { IndexComponent } from '../component/index/index.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  itemIncart:number;
  constructor(private cartService:CartService) { }

  ngOnInit() {
    // this.cartService.loadCart.subscribe((data:any)=>{
    //   this.itemIncart = data.length;
    //   console.log('quality cart',this.itemIncart)
    // })
    this.cartService.loadCart();
    // this.items = this.cartService.getItems();
    this.itemIncart=this.cartService.getItems().length;
    // console.log('nên pie',this.itemIncart)
    // this.index.getall_categories_section_begin();
    // this.cartService.saveCart();
  }

}
