import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  private subcription : Subscription;
  order_history: any;
  constructor(private admin : AdminService) { }
  order_history_fromCreate: FormGroup = new FormGroup({
    // id: new FormControl(),
    product_id: new FormControl(),
    customer_id: new FormControl(),
    order_id: new FormControl(),
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
  onCreate(){
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
}
