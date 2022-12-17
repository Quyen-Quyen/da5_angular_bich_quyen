import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  private subcription : Subscription;
  posts: any;
  type_post: any;
  posts_old: any;
  constructor(private admin : AdminService) { }
  posts_fromCreate: FormGroup = new FormGroup({
    // id: new FormControl(),
    type_post_id: new FormControl(),
    title: new FormControl(),
    staff_id: new FormControl(),
    content: new FormControl()

});

  ngOnInit(): void {
    this.get_all_posts();
  }

  get_all_posts(){
    this.subcription = this.admin.get_all_posts()
    .subscribe((data:any)=>{
      console.log(data.posts_all);
      console.log(data.type_post);
      console.log('postall',data.posts);
      this.posts=data.posts;
      this.type_post=data.type_post;
      this.posts_old=data.posts_all;
    },error =>{
      console.log(error);

    }
    )
  }
  onCreate(){
    this.admin.create_posts(this.posts_fromCreate.value).subscribe(data=>{ 
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

}
