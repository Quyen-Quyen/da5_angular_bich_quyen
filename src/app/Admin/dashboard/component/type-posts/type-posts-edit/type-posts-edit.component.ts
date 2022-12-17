import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-type-posts-edit',
  templateUrl: './type-posts-edit.component.html',
  styleUrls: ['./type-posts-edit.component.css']
})
export class TypePostsEditComponent implements OnInit {
  id: number = 0;
  constructor(private admin : AdminService ,private _router: ActivatedRoute , private router :Router) { }
  type_posts_fromEdit: FormGroup = new FormGroup({
    name : new FormControl(),
  })
  ngOnInit() {
    this.id = this._router.snapshot.params['id'];
    this.admin.get_type_posts(this.id).subscribe(data => {
      console.log(data)
      this.type_posts_fromEdit = new FormGroup({
        name: new FormControl(data.name),
      });
    })
  }
  onEdit() {
    this.admin.update_type_posts(this.id, this.type_posts_fromEdit.value).subscribe(data => {
      this.router.navigate(['admin/type-posts']);
      
    });
  }

}
