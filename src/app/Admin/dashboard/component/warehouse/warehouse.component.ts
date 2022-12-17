import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  constructor(private admin : AdminService) { }
  warehouse_fromCreate: FormGroup = new FormGroup({
    // id: new FormControl(),
    product_supplier_id: new FormControl(),
    product_id: new FormControl(),
    amount: new FormControl(),
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
  onCreate(){
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

}
