import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  private subcription : Subscription;
  searchText:any;
  customer :any;
  order_history: any;
      //phân trang
  // POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 8;
  tableSizes: any = [5, 10, 15, 20];
  //end
  constructor(private admin : AdminService) { }
  submitted:boolean = false;
  order_history_fromCreate: FormGroup = new FormGroup({
    // id: new FormControl(),
    product_id: new FormControl('',Validators.required),
    customer_id: new FormControl('',Validators.required),
    order_id: new FormControl('',Validators.required),
    // status: new FormControl()
});

  ngOnInit(): void {
    this.get_all_order_history();
  }

  get_all_order_history(){
    this.subcription = this.admin.get_all_order_history()
    .subscribe((data:any)=>{
      console.log(data);
      this.order_history=data;
    },error =>{
      console.log(error);

    }
    )
  }
  get f(){
    return this.order_history_fromCreate.controls;
  }
  onCreate(){
    this.submitted=true;
    this.admin.create_order_history(this.order_history_fromCreate.value).subscribe(data=>{ 
      this.order_history_fromCreate.reset();
      console.log(data);
       this.get_all_order_history();
    })
  }
  onDelete(id: number){ 
       if(confirm("bạn có chắc chắn xóa không ?")){
        this.admin.delete_order_history(id).subscribe((data)=>{
          this.get_all_order_history();
        })
       }
  }
      //phân trang
      ontableDataChange(event: any) {
        this.page = event;
        this.get_all_order_history();
      }
      ontableSizeChange(event: any): void {
        this.tableSize = event.target.value;
        this.page = 1;
        this.get_all_order_history();
      }
}
