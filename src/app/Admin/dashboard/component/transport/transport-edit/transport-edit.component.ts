import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-transport-edit',
  templateUrl: './transport-edit.component.html',
  styleUrls: ['./transport-edit.component.css']
})
export class TransportEditComponent implements OnInit {
  id: number = 0;
  constructor(private admin : AdminService ,private _router: ActivatedRoute , private router :Router) { }
  transport_fromEdit: FormGroup = new FormGroup({
    staff_id: new FormControl(),
    status_oder: new FormControl(),
    intend_time: new FormControl(),
  })
  ngOnInit() {
    this.id = this._router.snapshot.params['id'];
    this.admin.get_transport(this.id).subscribe(data => {
      console.log(data)
      this.transport_fromEdit = new FormGroup({
        staff_id: new FormControl(data.staff_id),
        status_oder: new FormControl(data.status_oder),
        intend_time: new FormControl(data.intend_time)
      });
    })
  }
  onEdit() {
    this.admin.update_transport(this.id, this.transport_fromEdit.value).subscribe(data => {
      this.router.navigate(['admin/transport']);
      
    });
  }

}
