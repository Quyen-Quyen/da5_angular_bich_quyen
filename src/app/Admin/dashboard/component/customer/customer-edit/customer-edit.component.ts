import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  id: number = 0;
  constructor(private admin : AdminService ,private _router: ActivatedRoute , private router :Router) { }
  customer_fromEdit: FormGroup = new FormGroup({
    name : new FormControl(),
    id_user: new FormControl(),
    date_of_birth: new FormControl(),
    sex: new FormControl(),
    email: new FormControl(),
    adress: new FormControl(),
    number_phone: new FormControl()
  })
  ngOnInit() {
    this.id = this._router.snapshot.params['id'];
    this.admin.get_customer(this.id).subscribe(data => {
      console.log(data)
      this.customer_fromEdit = new FormGroup({
        name: new FormControl(data.name),
        id_user: new FormControl(data.id_user),
        date_of_birth: new FormControl(data.date_of_birth),
        sex: new FormControl(data.sex),
        email: new FormControl(data.email),
        adress: new FormControl(data.adress),
        number_phone: new FormControl(data.number_phone),
      });
    })
  }
  onEdit() {
    this.admin.update_customer(this.id, this.customer_fromEdit.value).subscribe(data => {
      this.router.navigate(['admin/customer']);
      
    });
  }
}
