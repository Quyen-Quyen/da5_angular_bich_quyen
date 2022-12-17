import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  private subscription: Subscription 
  product:any;
  customer:any;
  constructor(private admin :AdminService ) { }
  
  ngOnInit() {
    this.getall_dashboarh();
    // console.log(this.product)
  }
  getall_dashboarh(){
    this.subscription = this.admin.getalldashboard().subscribe((data:any)=>{
      // console.log(data.customer);
      // console.log(data.product);
      this.customer=data.customer;
      this.product=data.product;
      // console.log(this.customer);
    },error =>{
      console.log(error);
    }
  )};

}
