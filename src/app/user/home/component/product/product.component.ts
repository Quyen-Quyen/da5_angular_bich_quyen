import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  category:any;

  constructor(private admin: AdminService ) { }
  private subscription: Subscription;
  ngOnInit() {
    this.getall_prduct();
  }
  getall_prduct(){
    this.subscription = this.admin.get_index_product().subscribe((data:any)=>{
      console.log(data);
      console.log(data.category);
      // this.categories_section_begin=data.product;
      this.category=data.category;
      // this.show_by_cate_product=data.show_by_cate_product;
      // this.all_product=data.all_product;
    },error =>{
      console.log(error);
    }
    )

}

}
