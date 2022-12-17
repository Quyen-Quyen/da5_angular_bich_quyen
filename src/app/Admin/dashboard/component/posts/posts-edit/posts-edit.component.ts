import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  constructor(private admin : AdminService ,private _router: ActivatedRoute , private router :Router) { }
  posts_fromEdit: FormGroup = new FormGroup({
    type_post_id: new FormControl(),
    title: new FormControl(),
    staff_id: new FormControl(),
    content: new FormControl()
  })
  ngOnInit() {
    this.id = this._router.snapshot.params['id'];
    this.admin.get_posts(this.id).subscribe(data => {
      console.log(data)
      this.posts_fromEdit = new FormGroup({
        type_post_id: new FormControl(data.type_post_id),
        title: new FormControl(data.title),
        staff_id: new FormControl(data.staff_id),
        content: new FormControl(data.content)
      });
    })
    this.admin.get_all_type_posts().subscribe(data=>{
      console.log('video_all',data);
      this.type_post=data;
    })
  }
  onEdit() {
    this.admin.update_posts(this.id, this.posts_fromEdit.value).subscribe(data => {
      this.router.navigate(['admin/posts']);
      
    });
  }

}
