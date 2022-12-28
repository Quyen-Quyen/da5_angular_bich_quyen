import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart_Service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  itemIncart:number;
  constructor(private cartService:CartService) { }

  ngOnInit() {
    // this.cartService.get_product.subscribe((data:any)=>{
    //   this.itemIncart = data.length;
    //   console.log('quality cart',this.itemIncart)
    // })
  }

}
