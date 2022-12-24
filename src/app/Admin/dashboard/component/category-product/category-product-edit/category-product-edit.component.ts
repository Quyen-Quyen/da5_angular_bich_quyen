import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { CategoryProductComponent } from '../category-product.component';

@Component({
  selector: 'app-category-product-edit',
  templateUrl: './category-product-edit.component.html',
  styleUrls: ['./category-product-edit.component.css']
})
export class CategoryProductEditComponent implements OnInit {
  id: number = 0;
  supplier:any;
  constructor(private admin : AdminService ,private _router: ActivatedRoute , private router :Router ) { 

  }
  // supp= cate_pro.supplier;
  submitted:boolean = false;
  category_product_fromEdit: FormGroup = new FormGroup({
    name: new FormControl(),
    product_supplier_id: new FormControl(),
  })
  ngOnInit() {

    this.id = this._router.snapshot.params['id'];
    this.admin.get_category(this.id).subscribe(data => {
      console.log(data)
      this.submitted = false;
      this.category_product_fromEdit = new FormGroup({
        name: new FormControl(data.name,Validators.required),
        product_supplier_id: new FormControl(data.product_supplier_id),
      });
    })

    this.admin.get_all_info_supplier().subscribe(data=>{
      console.log(data);
      this.supplier=data;
    })
  }
  get f(){
    return this.category_product_fromEdit.controls;
  }
  onEdit() {
    // alert('aa');
    this.submitted=true;
    this.admin.update_category(this.id, this.category_product_fromEdit.value).subscribe(data => {
      this.router.navigate(['admin/category-product']);
      
    });
  }
}
