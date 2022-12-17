import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
// import { users } from 'src/app/models/admin';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private subscription: Subscription;
  users: any[]=[];
  constructor(private admin: AdminService) { }

  ngOnInit(): void {
    this.getuser();
  }
  getuser() {
    this.subscription = this.admin.getalluser().subscribe((data:any)=>{
      console.log(data.name);
      this.users=data.name;
    })
  }
}



