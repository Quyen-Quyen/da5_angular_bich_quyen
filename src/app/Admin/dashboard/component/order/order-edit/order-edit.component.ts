import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {
  id: number = 0;
  constructor(private admin : AdminService ,private _router: ActivatedRoute , private router :Router) { }
  order_fromEdit: FormGroup = new FormGroup({
    product_id: new FormControl(),
    customer_id: new FormControl(),
    warehouse_id: new FormControl(),
  })
  ngOnInit() {
    this.id = this._router.snapshot.params['id'];
    this.admin.get_order(this.id).subscribe(data => {
      console.log(data)
      this.order_fromEdit = new FormGroup({
        product_id: new FormControl(data.product_id),
        customer_id: new FormControl(data.customer_id),
        warehouse_id: new FormControl(data.warehouse_id),
      });
    })
  }
  onEdit() {
    this.admin.update_order(this.id, this.order_fromEdit.value).subscribe(data => {
      this.router.navigate(['admin/order']);
      
    });
  }
}
