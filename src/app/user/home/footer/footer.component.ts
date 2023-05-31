import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  store_information:any;
  constructor(
    private admin: AdminService,
  ) { }

  ngOnInit() {
    this.admin.get_store_information().subscribe((data:any)=>{
      this.store_information=data.store_information[0]
    })
  }

}
