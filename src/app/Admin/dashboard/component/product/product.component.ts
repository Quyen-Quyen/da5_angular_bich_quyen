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

  // fileName = '';
  postForm: any;

  product: any;
  thumbnail: any;
  category_product: any;
  //phân trang
  // POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [5, 10, 15, 20];
  //end
  constructor(private admin: AdminService, private sanitizer: DomSanitizer ) { }
  product_fromCreate: FormGroup = new FormGroup({
    category_id: new FormControl(),
    name: new FormControl(),
    default_price: new FormControl(),
    price: new FormControl(),
    image: new FormControl(),
    description: new FormControl(),
    amount: new FormControl(),
  });

  // selectFile = null;
  // onFileSelected(event:any) {
  //   this.selectFile= event.target.files[0];
  //   console.log(event);
  // }

  // onupload(){
  //   this.http.post
  // }
  // postForm:any;


  ngOnInit(): void {
    this.get_all_product();

  }



  get_all_product() {
    this.subcription = this.admin.get_all_product()
      .subscribe((data: any) => {
        console.log(data.product);
        console.log(data.category_product);
        // CKEDITOR.instances.editor1.document.getBody().getText();
        // console.log('supplier',data.supplier);
        // let objectURL = 'data:image/jpeg;base64,' + data.product;
        // console.log('image',data.product);
        // this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
        this.product = data.product;
        this.category_product = data.category_product;
      }, error => {
        console.log(error);

      }
      )
  }
  updateImage(ev: any) {
    const file = ev.target.files[0];
    // this.postForm.patchValue = file.name;
    // console.log(this.postForm.path.value);
    console.log(this.postForm);
    // this.postForm({
    //   banner: file
    // })
  }

  onCreate() {
    // console.log('dâta',this.product_fromCreate.value);
    // console.log(this.product_fromCreate.value);
    // var formData = new FormData();
    // formData.append('file', this.postForm.value);
    // console.log(formData);
    this.admin.create_product(this.product_fromCreate.value).subscribe(data => {
      console.log('data2', this.product_fromCreate.value);

      this.product_fromCreate.reset();
      this.get_all_product();
    })
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
