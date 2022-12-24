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
  fileName : any;
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
      console.log('data',data)
      this.url=data.img_src;
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
  url = "./assets/image/empty.jpg";

  updateImage(ev: any) {
    if(ev.target.files)
    {
      var reader = new FileReader();
      reader.readAsDataURL(ev.target.files[0]);
      reader.onload=(event:any)=>{
        this.url =event.target.result;
      }
    }
    this.fileName = ev.target.files[0];

    console.log('file name',this.fileName);

  }


  onEdit() {
    // console.log(this.product_fromEdit.value);
    // const formData : FormData = new FormData();
    // formData.append('image',this.fileName);
    // console.log('ảnh',this.fileName)
    // formData.append('name',this.product_fromEdit.value.name);
    // formData.append('category_id',this.product_fromEdit.value.category_id);
    // formData.append('default_price',this.product_fromEdit.value.default_price);
    // formData.append('price',this.product_fromEdit.value.price);
    // formData.append('description',this.product_fromEdit.value.description);
    // formData.append('amount',this.product_fromEdit.value.amount);

    // console.log('name',this.product_fromEdit.value.name)

    this.admin.update_product(this.id,this.product_fromEdit.value).subscribe((data:any) => {
      console.log('data update',data);
      this.router.navigate(['admin/product']);
      
    });
  }

}
