import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-posts-edit',
  templateUrl: './posts-edit.component.html',
  styleUrls: ['./posts-edit.component.css']
})
export class PostsEditComponent implements OnInit {

  id: number = 0;
  type_post: any;
  fileName: any;
  // submitted:boolean = false;
  url_image = "http://127.0.0.1:8000/storage/";
  url: any;
  // url:any;
  constructor(private admin: AdminService, private _router: ActivatedRoute, private router: Router) { }
  posts_fromEdit: FormGroup = new FormGroup({
    type_post_id: new FormControl(),
    title: new FormControl(),
    staff_id: new FormControl(),
    // image: new FormControl(),
    content: new FormControl()
  })
  ngOnInit() {
    this.id = this._router.snapshot.params['id'];
    this.admin.get_posts(this.id).subscribe((data: any) => {
      // console.log(data)
      // console.log(data.image)
      // this.url = this.url_image + data.image;
      this.posts_fromEdit = new FormGroup({
        // type_post_id: new FormControl(data.type_post_id,Validators.required),
        // title: new FormControl(data.title,Validators.required),
        // staff_id: new FormControl(data.staff_id,Validators.required),
        // // image: new FormControl(data.image,Validators.required),
        // content: new FormControl(data.content,Validators.required)

        type_post_id: new FormControl(data.type_post_id),
        title: new FormControl(data.title),
        // staff_id: new FormControl(data.staff_id),
        // image: new FormControl(data.image,Validators.required),
        content: new FormControl(data.content)
      });

      console.log("ảnh", this.url)
    })
    this.admin.get_all_type_posts().subscribe(data => {
      console.log('posts_all', data);
      this.type_post = data;
    })
  }



  // url = 'test';
  // PostsEditComponent.url_image = url;
  // updateImage(ev: any) {
  //   if(ev.target.files)
  //   {
  //     var reader = new FileReader();
  //     reader.readAsDataURL(ev.target.files[0]);
  //     reader.onload=(event:any)=>{
  //       this.url =event.target.result;
  //     }
  //   }
  //   this.fileName = ev.target.files[0];

  //   console.log('file name',this.fileName);

  // }
  // get f() {
  //   return this.posts_fromEdit.controls;
  // }
  onEdit() {
    // this.submitted=true;
    // this.submitted=true;
    // const formData : FormData = new FormData();
    // formData.append('staff_id',this.posts_fromCreate.value.staff_id);
    // formData.append('type_post_id',this.posts_fromEdit.value.type_post_id);
    // // formData.append('image',this.fileName);
    // formData.append('title',this.posts_fromEdit.value.title);
    // formData.append('content',this.posts_fromEdit.value.content);

    // formData.values();
  //   for (var value of formData.values()) {
  //     console.log(value); 
  //  }
    // formData.append('content', this.posts_fromEdit.value.content);
    // console.log('title:', this.posts_fromEdit.value.title);
    // console.log('type_post_id:', formData.values());
    // console.log('content:', this.posts_fromEdit.value.content);

    // console.log('titile test',test);
    this.admin.update_posts(this.id,this.posts_fromEdit.value).subscribe((data: any) => {
      this.router.navigate(['admin/posts']);
      console.log('data đây', data)

    });
  }

}
