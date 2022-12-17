import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-type-video-edit',
  templateUrl: './type-video-edit.component.html',
  styleUrls: ['./type-video-edit.component.css']
})
export class TypeVideoEditComponent implements OnInit {
  id: number = 0;
  constructor(private admin : AdminService ,private _router: ActivatedRoute , private router :Router) { }
  type_video_fromEdit: FormGroup = new FormGroup({
    name : new FormControl(),
  })
  ngOnInit() {
    this.id = this._router.snapshot.params['id'];
    this.admin.get_type_video(this.id).subscribe(data => {
      console.log(data)
      this.type_video_fromEdit = new FormGroup({
        name: new FormControl(data.name),
      });
    })
  }
  onEdit() {
    this.admin.update_type_video(this.id, this.type_video_fromEdit.value).subscribe(data => {
      this.router.navigate(['admin/type-video']);
      
    });
  }

}
