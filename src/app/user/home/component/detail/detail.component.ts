import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id: number = 0;
  detail_name:any;
  detail_default_price:any;
  detail_price:any;
  detail_img_src:any;
  detail_description:any;

  
  constructor(private admin: AdminService,private _router: ActivatedRoute  ) { }
  private subscription: Subscription
  ngOnInit() {
    this.get_detail();
  }
  get_detail(){
    this.id = this._router.snapshot.params['id'];
    this.admin.get_detail(this.id).subscribe((data:any) => {
      
       this.detail_name = data.name;
       this.detail_price = data.default_price;
       this.detail_img_src = data.img_src;
       this.detail_description = data.description;
      console.log(this.detail_name);
      // this.detail = new FormGroup({
      //   category_id: new FormControl(data.category_id),
      //   name: new FormControl(data.name),
      //   default_price: new FormControl(data.default_price),
      //   price: new FormControl(data.price),
      //   image: new FormControl(data.image),
      //   description: new FormControl(data.description),
      // });
      // console.log(this.detail);
    })

}
}
