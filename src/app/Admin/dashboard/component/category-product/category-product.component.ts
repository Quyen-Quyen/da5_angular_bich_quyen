import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
// import { category_product } from 'src/app/models/admin';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.css']
})
export class CategoryProductComponent implements OnInit {

  private subcription : Subscription;
  category_product: any;
  supplier:any;
  constructor(private admin : AdminService) { }
  category_product_fromCreate: FormGroup = new FormGroup({
    // id: new FormControl(),
    name: new FormControl(),
    product_supplier_id: new FormControl(),
    warehouse_id: new FormControl(),
    // status: new FormControl()
});

  ngOnInit(): void {
    this.get_all_category_product();
  }

  get_all_category_product(){
    this.subcription = this.admin.getallcategory_product()
    .subscribe((data:any)=>{
      console.log('category_product',data.category_product);
      console.log('supplier',data.supplier);
      this.category_product=data.category_product;
      this.supplier=data.supplier;
    },error =>{
      console.log(error);

    }
    )
  }
  onCreate(){
    this.admin.create_category_product(this.category_product_fromCreate.value).subscribe(data=>{ 
      this.category_product_fromCreate.reset();
      console.log(data);
       this.get_all_category_product();
    })
  }
  onDelete(id: number){ 
       if(confirm("bạn có chắc chắn xóa không ?")){
        this.admin.delete_category(id).subscribe((data)=>{
          this.get_all_category_product();
        })
       }
  }

}
