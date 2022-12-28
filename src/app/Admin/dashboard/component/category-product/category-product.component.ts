import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  searchText:any;
  customer :any;
  category_product: any;
  supplier:any;
    //phân trang
  // POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 8;
  tableSizes: any = [5, 10, 15, 20];
  //end
  constructor(private admin : AdminService) { }
  submitted:boolean = false;
  category_product_fromCreate: FormGroup = new FormGroup({
    // id: new FormControl(),
    name: new FormControl('',Validators.required),
    product_supplier_id: new FormControl('',Validators.required),
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
  get f(){
    return this.category_product_fromCreate.controls;
  }
  onCreate(){
    this.submitted=true;
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

    //phân trang
    ontableDataChange(event: any) {
      this.page = event;
      this.get_all_category_product();
    }
    ontableSizeChange(event: any): void {
      this.tableSize = event.target.value;
      this.page = 1;
      this.get_all_category_product();
    }

    

}
