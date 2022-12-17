// import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/service/admin.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  // data_setbg:any;
    categories_section_begin:any;
    category:any;
    show_by_cate_product_13:any;
    show_by_cate_product_14:any;
    show_by_cate_product_15:any;
    all_product:any;
    
    customOptions: any = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: false,
      // navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
      navSpeed: 700,
      navText: ['<', '>'],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 4
        }
      },
      nav: true
    }
  constructor( private admin: AdminService ) { }
  private subscription: Subscription
  ngOnInit(): void {

      this.getall_categories_section_begin();
      this.get_prodcut_by_cate();
  

  }
  getall_categories_section_begin(){
    this.subscription = this.admin.get_index_product().subscribe((data:any)=>{
      console.log(data);
      console.log(data.product);
      this.categories_section_begin=data.product;
      this.category=data.category;
      // this.show_by_cate_product=data.show_by_cate_product;
      this.all_product=data.all_product;
    },error =>{
      console.log(error);
    }
    )

}
get_prodcut_by_cate(){
  this.subscription = this.admin.get_product_by_cate().subscribe((data:any)=>{
    console.log(data);
    this.show_by_cate_product_13=data.show_by_cate_product_13;
    this.show_by_cate_product_14=data.show_by_cate_product_14;
    this.show_by_cate_product_15=data.show_by_cate_product_15;

  })
}

}
