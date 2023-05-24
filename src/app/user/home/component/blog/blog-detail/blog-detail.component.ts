import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/service/admin.service';
@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  id : number=0;
  posts :any;
  title :any;
  staff_id :any;
  content :any;
  img_src :any;
  type_post_id :any;
  name_user:any;
  name_category:any;
  hashtag:any;
  avatar:any;

  private subscription: Subscription;
  constructor(private admin : AdminService,private _router: ActivatedRoute ) { }

  ngOnInit() {
    this.get_detail();
  }
  get_detail(){
    this.id = this._router.snapshot.params['id'];
    this.admin.get_detail_posts(this.id).subscribe((data:any) => {
      console.log('data nefff',data.posts[0])
      this.title =data.title;
      this.type_post_id =data.posts[0].type_post_id;
      this.staff_id =data.posts[0].staff_id;
      this.content =data.posts[0].content;
      this.img_src =data.posts[0].image;
      this.name_user =data.posts[0].name_user;
      this.name_category =data.posts[0].name;
      this.hashtag =data.posts[0].hashtag;
      this.avatar =data.posts[0].avatar;
    })

}

}
