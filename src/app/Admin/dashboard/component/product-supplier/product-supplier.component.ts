import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-product-supplier',
  templateUrl: './product-supplier.component.html',
  styleUrls: ['./product-supplier.component.css']
})
export class ProductSupplierComponent implements OnInit {
  private subcription : Subscription;
  searchText:any;
  customer :any;
  product_supplier: any;
  constructor(private admin : AdminService) { }
  product_supplier_fromCreate: FormGroup = new FormGroup({
    info_supplier_id: new FormControl(),
    name: new FormControl(),
    amount: new FormControl(),
    weight: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    // status: new FormControl(),
    // status: new FormControl()

});

  ngOnInit(): void {
    this.get_all_product_supplier();
  }

  get_all_product_supplier(){
    this.subcription = this.admin.get_all_product_supplier()
    .subscribe((data:any)=>{
      console.log(data);
      this.product_supplier=data;
    },error =>{
      console.log(error);

    }
    )
  }
  onCreate(){
    this.admin.create_product_supplier(this.product_supplier_fromCreate.value).subscribe(data=>{ 
      this.product_supplier_fromCreate.reset();
      console.log(data);
       this.get_all_product_supplier();
    })
  }
  onDelete(id: number){ 
       if(confirm("bạn có chắc chắn xóa không ?")){
        this.admin.delete_product_supplier(id).subscribe((data)=>{
          this.get_all_product_supplier();
        })
       }
  }

}
