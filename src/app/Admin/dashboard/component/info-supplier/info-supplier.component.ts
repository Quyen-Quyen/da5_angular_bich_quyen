import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-info-supplier',
  templateUrl: './info-supplier.component.html',
  styleUrls: ['./info-supplier.component.css']
})
export class InfoSupplierComponent implements OnInit {
  private subscription: Subscription;
  info_supplier :any;
      //phân trang
  // POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 8;
  tableSizes: any = [5, 10, 15, 20];
  //end
  constructor(private admin: AdminService ) { }
  info_supplier_fromCreate: FormGroup = new FormGroup({
    name : new FormControl(),
    email: new FormControl(),
    adress: new FormControl(),
    number_phone: new FormControl(),
    sectors: new FormControl(),
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
  onCreate(){
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
