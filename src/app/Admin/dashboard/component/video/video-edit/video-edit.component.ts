import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-video-edit',
  templateUrl: './video-edit.component.html',
  styleUrls: ['./video-edit.component.css']
})
export class VideoEditComponent implements OnInit {
  id: number = 0;
  video :any;
  constructor(private admin : AdminService ,private _router: ActivatedRoute , private router :Router) { }
  video_fromEdit: FormGroup = new FormGroup({
    title: new FormControl(),
    type_video_id: new FormControl(),
    video: new FormControl(),
    description: new FormControl(),
  })
  ngOnInit() {
    this.id = this._router.snapshot.params['id'];
    this.admin.get_video(this.id).subscribe(data => {
      console.log(data)
      this.video_fromEdit = new FormGroup({
        title: new FormControl(data.title),
        type_video_id: new FormControl(data.type_video_id),
        video: new FormControl(data.video),
        description: new FormControl(data.description),

      });
    }
    )
    
    this.admin.get_all_type_video().subscribe(data=>{
      console.log('video_all',data);
      this.video=data;
    })
  }
  onEdit() {
    this.admin.update_video(this.id, this.video_fromEdit.value).subscribe(data => {
      this.router.navigate(['admin/video']);
      
    });
  }

}
