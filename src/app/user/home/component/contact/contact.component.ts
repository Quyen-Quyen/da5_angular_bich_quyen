import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    private admin: AdminService,
  ) { }
  store_information:any;
  ngOnInit() {
    this.admin.get_store_information().subscribe((data:any)=>{
      this.store_information=data.store_information[0]
    })
  }

}
