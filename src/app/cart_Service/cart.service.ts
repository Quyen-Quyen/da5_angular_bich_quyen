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

  // get_all_product() {
  //   this.subcription = this.admin.get_all_product()
  //     .subscribe((data: any) => {


  //       this.products = data.product;
  //       console.log(this.products);
  //       // this.category_product = data.category_product;
  //     }, error => {
  //       console.log(error);
  //     }
  //     )
  // }
  // get_product(){
  //   return this.products;
  // }
  // saveCart(){
  //   localStorage.setItem('cart_items',JSON.stringify(this.products))
  // }
  // addToCart(addedProduct: any){
  //   this.products.push(addedProduct);
  //   this.saveCart();
  // }
  // loadCart(){
  //   this.products=JSON.parse(localStorage.getItem('cart_items') as any || []);
  // }
  // productInCart(product:any){
  //   return this.products.findIndex((x:any)=>x.id===product.id) > -1;
  // }
  // removeProduct(product:any){
  //   const index = this.products.findIndex((x:any)=>x.id===product.id)
  //   if(index >-1){
  //   }
  // }



  // sử dụng session
  
  // // Lấy dữ liệu từ session
  // GetCarts(){
  //   let cartJson=localStorage.getItem('cart');
  //   if(cartJson){
  //     return JSON.parse(cartJson);
  //   }else{
  //     return [];
  //   }
  // }
  // // GetCarts(){
  // //   let cartJson=sessionStorage.getItem('cart');
  // //   if(cartJson){
  // //     return JSON.parse(cartJson);
  // //   }else{
  // //     return [];
  // //   }
  // // }
  //  // Lưu dữ liệu vào session
  // savecart(){
  //   console.log('lưu vào đây',JSON.stringify(this.products))
  //   localStorage.setItem('cart_items',JSON.stringify(this.products))
  //   // let cartJson=JSON.stringify(carts);
  //   // sessionStorage.setItem('cart', cartJson);
  // }
  // // savecart(carts:any){
  // //   let cartJson=JSON.stringify(carts);
  // //   console.log('lưu vào đây',JSON.stringify(carts))
  // //   sessionStorage.setItem('cart', cartJson);
  // // }
  // // Hàm tính tổng tiền của 1 sản phẩm
  // getcarttotalprice(){
  //   let carts = this.GetCarts();
  //   let total: number = 0;
  //   carts.forEach((item: any) => {
  //     total += item.quantity * item.price;
  //   });

  //   return total;
  // }
  // // hàm hiển tính tổng tiền của tất cả
  // getcarttotalquanlity(){
  //   let cartss = this.GetCarts();
  //   let totals: number = 0;
  //   cartss.forEach((item: any) => {
  //     totals += item.quantity * 1;
  //   });

  //   return totals;
  // }


  items:any = [];

  addToCart(addedItem:any) {
    this.items.push(addedItem);
    this.saveCart();
  }
  getItems() {
    return this.items;
  }

  loadCart(): void {
    this.items=JSON.parse(localStorage.getItem('cart_items') as any || []);
    console.log('số lượng',this.items.length)
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
