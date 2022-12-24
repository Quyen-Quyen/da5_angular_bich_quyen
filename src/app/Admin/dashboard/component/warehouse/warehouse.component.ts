import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {
  private subcription : Subscription;
  warehouse: any;
    //phân trang
  // POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [5, 10, 15, 20];
  //end
  constructor(private admin : AdminService) { }
  submitted:boolean = false;
  warehouse_fromCreate: FormGroup = new FormGroup({
    // id: new FormControl(),
    product_supplier_id: new FormControl('',Validators.required),
    product_id: new FormControl('',Validators.required),
    amount: new FormControl('',Validators.required),
    // status: new FormControl()
    
});

  ngOnInit(): void {
    this.get_all_warehouse();
  }

  get_all_warehouse(){
    this.subcription = this.admin.get_all_warehouse()
    .subscribe((data:any)=>{
      console.log(data.warehouse);
      this.warehouse=data.warehouse;
    },error =>{
      console.log(error);

    }
    )
  }
  get f(){
    return this.warehouse_fromCreate.controls;
  }
  onCreate(){
    this.submitted=true;

    this.admin.create_warehouse(this.warehouse_fromCreate.value).subscribe(data=>{ 
      this.warehouse_fromCreate.reset();
      console.log(data);
       this.get_all_warehouse();
    })
  }
  onDelete(id: number){ 
       if(confirm("bạn có chắc chắn xóa không ?")){
        this.admin.delete_warehouse(id).subscribe((data)=>{
          this.get_all_warehouse();
        })
       }
  }
    //phân trang
    ontableDataChange(event: any) {
      this.page = event;
      this.get_all_warehouse();
    }
    ontableSizeChange(event: any): void {
      this.tableSize = event.target.value;
      this.page = 1;
      this.get_all_warehouse();
    }

}
