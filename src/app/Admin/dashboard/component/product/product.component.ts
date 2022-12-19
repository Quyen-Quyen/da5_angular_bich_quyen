import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/service/admin.service';
// import { aaaa } from 'src/assets/image';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title = "paginate";
  private subcription: Subscription;

  fileName : any;
  // postForm: any;
  imagesTest: any = null;
  // file: File;
  product: any;
  thumbnail: any;
  category_product: any;
  //phân trang
  // POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 8;
  tableSizes: any = [5, 10, 15, 20];
  //end
  constructor(private admin: AdminService, private sanitizer: DomSanitizer) { }
  product_fromCreate: FormGroup = new FormGroup({
    // formData = new FormData(),
    // formData.append('file',new FormControl(),),
    category_id: new FormControl(),
    name: new FormControl(),
    default_price: new FormControl(),
    price: new FormControl(),
    image: new FormControl(),
    description: new FormControl(),
    amount: new FormControl(),

  });



  ngOnInit(): void {
    this.get_all_product();

  }



  get_all_product() {
    this.subcription = this.admin.get_all_product()
      .subscribe((data: any) => {
        console.log(data.product);
        console.log(data.category_product);

        this.product = data.product;
        this.category_product = data.category_product;
      }, error => {
        console.log(error);

      }
      )
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
  onCreate() {



    const formData : FormData = new FormData();
    formData.append('image',this.fileName);
    formData.append('name',this.product_fromCreate.value.name);
    formData.append('category_id',this.product_fromCreate.value.category_id);
    formData.append('default_price',this.product_fromCreate.value.default_price);
    formData.append('price',this.product_fromCreate.value.price);
    formData.append('description',this.product_fromCreate.value.description);
    formData.append('amount',this.product_fromCreate.value.amount);
    // formData.append('file', this.product_fromCreate.get('fileSource')?.value);
    // console.log('formdata',this.fileName);
    console.log('data',this.product_fromCreate.value);

    // var formData = new FormData();
    // formData.append('file', this.product_fromCreate.value.image);
    this.admin.create_product(formData).subscribe((data:any) => {
    // this.admin.create_product(this.product_fromCreate.value).subscribe((data:any) => {
      // console.log('data2', formData);
      console.log('success',data)

      this.product_fromCreate.reset();
      this.get_all_product();
    }
    )
  }






  onDelete(id: number) {
    if (confirm("bạn có chắc chắn xóa không ?")) {
      this.admin.delete_product(id).subscribe((data) => {
        this.get_all_product();
      })
    }
  }

  //phân trang
  ontableDataChange(event: any) {
    this.page = event;
    this.get_all_product();
  }
  ontableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.get_all_product();
  }



}
