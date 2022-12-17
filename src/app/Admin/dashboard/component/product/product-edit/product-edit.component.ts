import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  id: number = 0;
  product :any;
  constructor(private admin : AdminService ,private _router: ActivatedRoute , private router :Router) { }
  product_fromEdit: FormGroup = new FormGroup({
    category_id: new FormControl(),
    name: new FormControl(),
    default_price: new FormControl(),
    price: new FormControl(),
    image: new FormControl(),
    description: new FormControl()
  })
  ngOnInit() {
    this.id = this._router.snapshot.params['id'];
    this.admin.get_product(this.id).subscribe(data => {
      console.log(data)
      this.product=data;
      this.product_fromEdit = new FormGroup({
        category_id: new FormControl(data.category_id),
        name: new FormControl(data.name),
        default_price: new FormControl(data.default_price),
        price: new FormControl(data.price),
        image: new FormControl(data.image),
        description: new FormControl(data.description),
      });
      console.log(this.product_fromEdit);
    })
  }
  onEdit() {
    this.admin.update_product(this.id, this.product_fromEdit.value).subscribe(data => {
      this.router.navigate(['admin/product']);
      
    });
  }

}
