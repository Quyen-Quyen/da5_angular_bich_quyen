import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-type-video',
  templateUrl: './type-video.component.html',
  styleUrls: ['./type-video.component.css']
})
export class TypeVideoComponent implements OnInit {

  private subcription : Subscription;
  type_video: any;
  constructor(private admin : AdminService) { }
  type_video_fromCreate: FormGroup = new FormGroup({
    name: new FormControl(),
});

  ngOnInit(): void {
    this.get_all_type_video();
  }

  get_all_type_video(){
    this.subcription = this.admin.get_all_type_video()
    .subscribe((data:any)=>{
      console.log(data);
      this.type_video=data;
    },error =>{
      console.log(error);

    }
    )
  }
  onCreate(){
    this.admin.create_type_video(this.type_video_fromCreate.value).subscribe(data=>{ 
      this.type_video_fromCreate.reset();
      console.log(data);
       this.get_all_type_video();
    })
  }
  onDelete(id: number){ 
       if(confirm("bạn có chắc chắn xóa không ?")){
        this.admin.delete_type_video(id).subscribe((data)=>{
          this.get_all_type_video();
        })
       }
  }

}
