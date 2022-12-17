import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  private subscription: Subscription;
  customer :any;
  constructor(private admin: AdminService ) { }
  submitted:boolean = false;
  customer_fromCreate: FormGroup = new FormGroup({
    name : new FormControl('',Validators.required),
    id_user: new FormControl('',Validators.required),
    date_of_birth: new FormControl('',Validators.required),
    sex: new FormControl('',Validators.required),
    email: new FormControl('',Validators.email),
    adress: new FormControl('',Validators.required),
    number_phone: new FormControl('',Validators.required)
  });

  ngOnInit() {
    this.getall_customer();
  }
  
  getall_customer(){
    this.subscription = this.admin.get_all_customer().subscribe((data:any)=>{
      console.log(data);
      this.customer=data;
    },error =>{
      console.log(error);
    }
    )
}



  onDelete(id: number){
    if(confirm("bạn có chắc chắn xóa không ?")){
    this.subscription = this.admin.delete_customer(id).subscribe((data)=>{
      this.getall_customer();
    })
  }
  }
  get f(){
    return this.customer_fromCreate.controls;
  }
  onCreate(){
    this.submitted=true;
    this.subscription = this.admin.create_customer(this.customer_fromCreate.value).subscribe((data)=>{
      this.customer_fromCreate.reset();
      console.log(data);
      this.getall_customer();
    })
  }
}
