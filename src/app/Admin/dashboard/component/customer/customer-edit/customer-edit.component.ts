import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  submitted:boolean = false;

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
        name: new FormControl(data.name,Validators.required),
        id_user: new FormControl(data.id_user,Validators.required),
        date_of_birth: new FormControl(data.date_of_birth,Validators.required),
        sex: new FormControl(data.sex,Validators.required),
        email: new FormControl(data.email,Validators.email),
        adress: new FormControl(data.adress,Validators.required),
        number_phone: new FormControl(data.number_phone,[Validators.min(100000000),Validators.max(10000000000)]),
      });
    })
  }
  get f(){
    return this.customer_fromEdit.controls;
  }
  onEdit() {
    this.submitted=true;
    this.admin.update_customer(this.id, this.customer_fromEdit.value).subscribe(data => {
      this.router.navigate(['admin/customer']);
      
    });
  }
}
