import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { AdminService } from '../service/admin.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private subcription: Subscription;

  products:any[]=[];
  constructor(private admin: AdminService) { 


  }



  items:any = [];

  addToCart(addedItem:any) {
    this.items.push(addedItem);
    this.saveCart();
  }
  getItems() {
    return this.items;
  }

  loadCart(): void {
    // this.items=JSON.parse(localStorage.getItem('cart_items') as any);
    this.items=JSON.parse(localStorage.getItem('cart_items') as any || []);
    // console.log('số lượng',this.items.length)
    // console.log("day là cho ra data",this.items)
  }

  saveCart(): void {
    localStorage.setItem('cart_items', JSON.stringify(this.items));
  }
  itemInCart(item:any): boolean {
    return this.items.findIndex((o:any) => o.id === item.id) > -1;
  }

  
  clearCart(items:any) {
    this.items = [];

    localStorage.removeItem('cart_items');
  }

  removeItem(item:any) {
    const index = this.items.findIndex((o:any) => o.id === item.id);

    if (index > -1) {
      this.items.splice(index, 1);
      this.saveCart();
    }
  }
}
