import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-info-supplier-edit',
  templateUrl: './info-supplier-edit.component.html',
  styleUrls: ['./info-supplier-edit.component.css']
})
export class InfoSupplierEditComponent implements OnInit {
  id: number = 0;
  constructor(private admin : AdminService ,private _router: ActivatedRoute , private router :Router) { }
  info_supplier_fromEdit: FormGroup = new FormGroup({
    name : new FormControl(),
    email: new FormControl(),
    adress: new FormControl(),
    number_phone: new FormControl(),
    sectors: new FormControl(),
  })
  ngOnInit() {
    this.id = this._router.snapshot.params['id'];
    // console.log(this._router.snapshot.params['id']);
    this.admin.get_info_supplier(this.id).subscribe(data => {
      console.log(data)
      this.info_supplier_fromEdit = new FormGroup({
        name: new FormControl(data.name),
        email: new FormControl(data.email),
        adress: new FormControl(data.adress),
        number_phone: new FormControl(data.number_phone),
        sectors: new FormControl(data.sectors),
      });
    })
  }
  onEdit() {
    this.admin.update_info_supplier(this.id, this.info_supplier_fromEdit.value).subscribe(data => {
      this.router.navigate(['admin/info-supplier']);
      
    });
  }
}
