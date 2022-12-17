import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-product-supplier-edit',
  templateUrl: './product-supplier-edit.component.html',
  styleUrls: ['./product-supplier-edit.component.css']
})
export class ProductSupplierEditComponent implements OnInit {
  id: number = 0;
  constructor(private admin : AdminService ,private _router: ActivatedRoute , private router :Router) { }
  product_supplier_fromEdit: FormGroup = new FormGroup({
    info_supplier_id: new FormControl(),
    name: new FormControl(),
    amount: new FormControl(),
    weight: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  })
  ngOnInit() {
    this.id = this._router.snapshot.params['id'];
    this.admin.get_product_supplier(this.id).subscribe(data => {
      console.log(data)
      this.product_supplier_fromEdit = new FormGroup({
        info_supplier_id: new FormControl(data.info_supplier_id),
        name: new FormControl(data.name),
        amount: new FormControl(data.amount),
        weight: new FormControl(data.weight),
        price: new FormControl(data.price),
        description: new FormControl(data.description),
      });
    })
  }
  onEdit() {
    this.admin.update_product_supplier(this.id, this.product_supplier_fromEdit.value).subscribe(data => {
      this.router.navigate(['admin/product-supplier']);
      
    });
  }

}
