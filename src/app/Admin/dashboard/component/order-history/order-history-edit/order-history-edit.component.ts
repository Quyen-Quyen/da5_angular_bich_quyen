import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-order-history-edit',
  templateUrl: './order-history-edit.component.html',
  styleUrls: ['./order-history-edit.component.css']
})
export class OrderHistoryEditComponent implements OnInit {

  id: number = 0;
  constructor(private admin : AdminService ,private _router: ActivatedRoute , private router :Router) { }
  order_history_fromEdit: FormGroup = new FormGroup({
    product_id: new FormControl(),
    customer_id: new FormControl(),
    order_id: new FormControl(),
  })
  ngOnInit() {
    this.id = this._router.snapshot.params['id'];
    this.admin.get_order_history(this.id).subscribe(data => {
      console.log(data)
      this.order_history_fromEdit = new FormGroup({
        product_id: new FormControl(data.product_id),
        customer_id: new FormControl(data.customer_id),
        order_id: new FormControl(data.order_id)
      });
    })
  }
  onEdit() {
    this.admin.update_order_history(this.id, this.order_history_fromEdit.value).subscribe(data => {
      this.router.navigate(['admin/order-history']);
      
    });
  }
}
