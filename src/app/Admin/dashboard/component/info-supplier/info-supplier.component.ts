import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-info-supplier',
  templateUrl: './info-supplier.component.html',
  styleUrls: ['./info-supplier.component.css']
})
export class InfoSupplierComponent implements OnInit {
  private subscription: Subscription;
  searchText:any;
  customer :any;
  info_supplier :any;
      //phân trang
  // POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 8;
  tableSizes: any = [5, 10, 15, 20];
  //end
  constructor(private admin: AdminService ) { }
  submitted:boolean = false;
  info_supplier_fromCreate: FormGroup = new FormGroup({
    name : new FormControl('',Validators.required),
    email: new FormControl('',Validators.email),
    adress: new FormControl('',Validators.required),
    number_phone: new FormControl('',[Validators.min(100000000),Validators.max(10000000000)]),
    sectors: new FormControl('',Validators.required),
  });

  

  ngOnInit() {
    this.getall_info_supplier();
    
  }
  getall_info_supplier(){
    this.subscription = this.admin.get_all_info_supplier().subscribe((data:any)=>{
      console.log(data);
      this.info_supplier=data;
    },error =>{
      console.log(error);
    }
    )
}
  onDelete(id: number){
    if(confirm("bạn có chắc chắn xóa không ?")){
    this.subscription = this.admin.delete_info_supplier(id).subscribe((data)=>{
      this.getall_info_supplier();
    })
  }
  }
  get f(){
    return this.info_supplier_fromCreate.controls;
  }
  onCreate(){
    this.submitted=true;
    this.subscription = this.admin.create_info_supplier(this.info_supplier_fromCreate.value).subscribe((data)=>{
      console.log(data);
      this.info_supplier_fromCreate.reset();
      this.getall_info_supplier();
    })
  }

      //phân trang
      ontableDataChange(event: any) {
        this.page = event;
        this.getall_info_supplier();
      }
      ontableSizeChange(event: any): void {
        this.tableSize = event.target.value;
        this.page = 1;
        this.getall_info_supplier();
      }

}
