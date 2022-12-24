import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/service/admin.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  private subcription : Subscription;
  searchText:any;
  customer :any;
  fileName : any;
  posts: any;
  type_post: any;
  posts_old: any;
      //phân trang
  // POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 8;
  tableSizes: any = [5, 10, 15, 20];
  //end
  constructor(private admin : AdminService, private sanitizer: DomSanitizer) { }
  submitted:boolean = false;
  posts_fromCreate: FormGroup = new FormGroup({
    // id: new FormControl(),
    type_post_id: new FormControl('',Validators.required),
    title: new FormControl('',Validators.required),
    staff_id: new FormControl('',Validators.required),
    image: new FormControl('',Validators.required),
    content: new FormControl('',Validators.required)

});

  ngOnInit(): void {
    this.get_all_posts();
  }

  get_all_posts(){
    this.subcription = this.admin.get_all_posts()
    .subscribe((data:any)=>{
      // console.log(data.posts_all);
      // console.log(data.type_post);
      // console.log('postall',data.posts);
      this.posts=data.posts;
      this.type_post=data.type_post;
      this.posts_old=data.posts_all;
    },error =>{
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
  get f(){
    return this.posts_fromCreate.controls;
  }
  onCreate(){
    this.submitted=true;
    const formData : FormData = new FormData();
    // formData.append('staff_id',this.posts_fromCreate.value.staff_id);
    formData.append('type_post_id',this.posts_fromCreate.value.type_post_id);
    formData.append('image',this.fileName);
    formData.append('title',this.posts_fromCreate.value.title);
    formData.append('content',this.posts_fromCreate.value.content);

    // console.log('formData',this.posts_fromCreate.value.type_post_id);
    // console.log('title',this.posts_fromCreate.value.title)
    // console.log('staff_id',this.posts_fromCreate.value.staff_id)
    // console.log('content',this.posts_fromCreate.value.content)
    console.log('this.fileName',this.fileName)
    // console.log('test nè',test)
    this.admin.create_posts(formData).subscribe((data:any)=>{
          // console.log('form',this.posts_fromCreate.value.image)
    // this.admin.create_posts(this.posts_fromCreate.value).subscribe((data:any)=>{
      this.posts_fromCreate.reset();
      console.log(data);
       this.get_all_posts();
    })
  }
  onDelete(id: number){
       if(confirm("bạn có chắc chắn xóa không ?")){
        this.admin.delete_posts(id).subscribe((data)=>{
          this.get_all_posts();
        })
       }
  }

    //phân trang
    ontableDataChange(event: any) {
      this.page = event;
      this.get_all_posts();
    }
    ontableSizeChange(event: any): void {
      this.tableSize = event.target.value;
      this.page = 1;
      this.get_all_posts();
    }

}
